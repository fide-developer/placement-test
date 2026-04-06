import { useMutation } from '@tanstack/react-query';

interface StartTestResponse {
  sessionId: string;
}

async function startTest(): Promise<StartTestResponse> {
  const response = await fetch('/api/placement-test/start', { method: 'POST' });

  if (!response.ok) {
    throw new Error('Failed to start test session');
  }

  return response.json();
}

export function useStartTest() {
  return useMutation({
    mutationFn: startTest,
  });
}
