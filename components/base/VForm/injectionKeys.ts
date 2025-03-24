import type { InjectionKey } from 'vue';

export const FORM_ITEM_INJECTION_KEY = Symbol('form-item-injection-key') as InjectionKey<string>;
export const FieldContextKey = Symbol('field-context-key') as InjectionKey<{ name: string }>;
