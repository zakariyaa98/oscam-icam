"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = values.name.trim();
    const email = values.email.trim();
    const subject = values.subject.trim();
    const message = values.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setErrorMessage("Bitte füllen Sie alle Felder aus.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data: { error?: string } | null = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Die Nachricht konnte nicht gesendet werden.");
      }

      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Die Nachricht konnte nicht gesendet werden."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-8 sm:p-10"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-aqua"
          placeholder="Ihr vollständiger Name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          E-Mail-Adresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-aqua"
          placeholder="sie@email.de"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Betreff
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={values.subject}
          onChange={(event) => setValues((prev) => ({ ...prev, subject: event.target.value }))}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-aqua"
          placeholder="Worum geht es?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-aqua"
          placeholder="Wie können wir helfen?"
        />
      </div>

      <div aria-live="polite">
        {status === "success" ? (
          <p
            role="status"
            className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
          >
            Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
          </p>
        ) : null}

        {status === "error" ? (
          <p
            role="alert"
            className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            {errorMessage}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-aqua px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-aqua-soft hover:shadow-[0_0_30px_rgba(83,189,50,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
      </button>
    </form>
  );
}
