import { beforeEach, describe, expect, test } from 'vitest';
import { useAuthStore } from './useAuthStore';
import { act } from '@testing-library/react';

describe('authStore', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  test('State not authenticated', () => {
    const { isAuthenticated } = useAuthStore.getState();
    expect(isAuthenticated).toBe(false);
  });
  test('Login', () => {
    const { login } = useAuthStore.getState();
    act(() => {
      login();
    });
    const { isAuthenticated } = useAuthStore.getState();
    expect(isAuthenticated).toBe(true);
    expect(localStorage.getItem('isAuthenticated')).toBe('true');
  });

  test('Logut', () => {
    const { login, logout } = useAuthStore.getState();
    act(() => {
      login();
    });
    act(() => {
      logout();
    });
    const { isAuthenticated } = useAuthStore.getState();
    expect(isAuthenticated).toBe(false);
    expect(localStorage.getItem('isAuthenticated')).toBe(null);
  });
});
