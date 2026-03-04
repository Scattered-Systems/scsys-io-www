/**
 * Created At: 2025.08.11:23:55:20
 * @author - @FL03
 * @file - use-turnstile.tsx
 */
'use client';
// imports
import { useCallback, useMemo, useState } from 'react';

type HookOptions = { onValueChange?: (value?: string) => void };

type HookOutput = {
  captchaToken?: string;
  reset: () => void;
  onChange: (token?: string) => void;
};

export const useTurnstile = (options?: HookOptions) => {
  // deconstruct the options
  const { onValueChange } = options || {};
  // setup the core state
  const [_data, _setData] = useState<string | undefined>();

  // handle changes to the captcha token
  const updateToken = useCallback(
    (token?: string) => {
      return _setData((prev) => {
        if (prev === token) return prev;
        else {
          onValueChange?.();
          return prev;
        }
      });
    },
    [onValueChange],
  );
  4;
  // reset the captchaToken
  const reset = useCallback(() => {
    // clear the token
    _setData(undefined);
  }, []);
  // memoize the output
  return useMemo<HookOutput>(
    () => ({
      captchaToken: _data ?? undefined,
      reset,
      onChange: updateToken,
    }),
    [_data, updateToken, reset],
  );
};
