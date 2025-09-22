import { reactive } from "vue";

export type ToastType = "info" | "success" | "error";

export type ToastMessage = {
  id: number;
  text: string;
  type: ToastType;
};

export const toastState = reactive({
  messages: [] as ToastMessage[],
  nextId: 1 as ToastMessage["id"],
});

export function toast(text: string, type: ToastType = "info", duration = 5000) {
  const id = toastState.nextId++;
  toastState.messages.push({ id, text, type });

  setTimeout(() => {
    toastState.messages = toastState.messages.filter((msg) => msg.id !== id);
  }, duration);
}
