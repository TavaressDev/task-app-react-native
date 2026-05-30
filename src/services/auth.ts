const baseURL = process.env.EXPO_PUBLIC_AUTH_URL;

type LoginPayload = {
  email: string;
  password: string;
};

type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

type AuthResponse = {
  sessionToken: string;
};

async function parseAuthResponse(response: Response): Promise<AuthResponse> {
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = data?.message || data?.error || 'Erro na autenticacao';
    throw new Error(message);
  }

  return {
    sessionToken: data.sessionToken || data.token,
  };
}

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return parseAuthResponse(response);
}

export async function signup(payload: SignupPayload): Promise<AuthResponse> {
  const response = await fetch(`${baseURL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return parseAuthResponse(response);
}
