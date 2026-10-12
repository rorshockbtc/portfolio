export function openContactModal(subject: string = "1-Week Production Sprint ($7,500)") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-contact-modal", {
        detail: { subject },
      })
    );
  }
}
