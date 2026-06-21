import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import Anthropic from "@anthropic-ai/sdk";
import profile from "../data/profile";

const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY || "",
  dangerouslyAllowBrowser: true,
});

function buildSystemPrompt() {
  const exp = profile.experience
    .map((j) => `  • ${j.role} at ${j.company} (${j.period}): ${j.bullets.join("; ")}`)
    .join("\n");

  const projects = profile.projects
    .map((p) => `  • ${p.name}: ${p.tagline}`)
    .join("\n");

  return `You are a concise AI assistant embedded in ${profile.name}'s personal portfolio website. Answer questions about ${profile.name} based only on the profile data below. Keep answers short and professional (2-4 sentences max). If asked something not in the profile, suggest the visitor reach out via email at rajarsi3997@gmail.com. Do not fabricate details.

NAME: ${profile.name}
TITLE: ${profile.title}
LOCATION: ${profile.location}
SUMMARY: ${profile.summary}

SKILLS: ${profile.skills.join(", ")}

EXPERIENCE:
${exp}

PROJECTS:
${projects}

CERTIFICATIONS:
  • AWS Certified Developer — Associate (2023)
  • Microsoft Certified: Azure Fundamentals (2023)

OPEN SOURCE:
  • PostGraphile — Collaborated with Benjie Gillam (creator) on GraphQL web server architecture for SysCloud's platform.

EDUCATION:
  • MSc Computer Science — Pondicherry University (2019–2021)
  • BSc Computer Science — St. Xavier's College, Kolkata (2016–2019)

CONTACT: rajarsi3997@gmail.com | ${profile.phone}`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

const WELCOME_MSG = {
  role: "assistant",
  content: `Hi! I'm an AI assistant for this portfolio. Ask me about Rajarsi's experience, skills, or projects.`,
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };
    const history = [...messages, userMsg];

    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    if (!import.meta.env.VITE_ANTHROPIC_API_KEY) {
      setMessages([
        ...history,
        {
          role: "assistant",
          content:
            "The AI assistant isn't configured yet. Please reach out directly at rajarsi3997@gmail.com.",
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const stream = client.messages.stream({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: history.map(({ role, content }) => ({ role, content })),
      });

      stream.on("text", (chunk) => {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      });

      await stream.finalMessage();
    } catch (err) {
      const isOffline = !navigator.onLine || err instanceof TypeError;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: isOffline
            ? "You appear to be offline. Please check your connection and try again."
            : "Something went wrong. Please try reaching out via email at rajarsi3997@gmail.com.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* ── Chat window ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed bottom-24 left-6 z-50 flex w-80 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f0f13] shadow-2xl shadow-black/60"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/15">
                  <MessageCircle size={13} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/80">
                    Ask about Rajarsi
                  </div>
                  <div className="mt-px flex items-center gap-1 font-mono text-[10px] text-white/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    AI Assistant
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-6 w-6 items-center justify-center rounded-md text-white/25 transition-colors hover:text-white/55"
                aria-label="Close chat"
              >
                <X size={14} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex flex-col gap-3 overflow-y-auto px-4 py-3"
              style={{ minHeight: 260, maxHeight: 320 }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-amber-400/15 text-white/80"
                        : "bg-white/[0.04] text-white/58"
                    }`}
                  >
                    {msg.content ? (
                      msg.content
                    ) : (
                      <span className="flex items-center gap-1.5 text-white/28">
                        <Loader2 size={11} className="animate-spin" />
                        Thinking…
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.06] p-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 focus-within:border-amber-400/25 transition-colors">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask something…"
                  disabled={loading}
                  className="flex-1 bg-transparent font-mono text-xs text-white/70 placeholder-white/20 outline-none disabled:opacity-40"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="flex h-6 w-6 items-center justify-center rounded-md text-amber-400/50 transition-colors hover:text-amber-400 disabled:pointer-events-none disabled:opacity-25"
                  aria-label="Send"
                >
                  {loading ? (
                    <Loader2 size={13} className="animate-spin" />
                  ) : (
                    <Send size={13} />
                  )}
                </button>
              </div>
              <p className="mt-1.5 text-center font-mono text-[9px] text-white/15">
                Powered by Claude
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating trigger ─────────────────────────── */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-8 left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/30 bg-[#0d0d10]/90 text-amber-400 shadow-lg shadow-black/40 backdrop-blur-sm transition-colors hover:border-amber-400/55 hover:bg-amber-400/10"
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -80, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 80, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 80, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -80, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
