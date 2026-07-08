/**
 * Shared form submission helper for GHL inbound webhooks.
 */
export async function submitToGhl(
  webhookUrl: string | undefined,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; unavailable: boolean }> {
  if (!webhookUrl) {
    return { ok: false, unavailable: true };
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return { ok: response.ok, unavailable: false };
}

export function showMessage(
  el: HTMLElement | null,
  text: string,
  type: 'success' | 'error',
) {
  if (!el) return;
  el.textContent = text;
  el.className = `form-message ${type}`;
}

export function hideMessage(el: HTMLElement | null) {
  if (!el) return;
  el.className = 'form-message hidden';
}
