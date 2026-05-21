# PokAImon Generator 🎨

A PokAImon Generator app where you can:

- Draw your own Pokémon-style creatures
- Generate AI-powered PokAImon from your doodles
- Browse a gallery of created PokAImon
- Like your favorite creations

## Tech stack

- ✅ React fundamentals (Components, JSX, Props)
- ✅ **Routing** (React Router)
- ✅ State Management (useState)
- ✅ Side Effects (useEffect)
- ✅ Custom Hooks
- ✅ Context API
- ✅ Performance (useMemo, useCallback)
- ✅ **React 19 Features** (Suspense, Lazy Loading)
- ✅ Error Handling

---

## Prerequisites

- Node.js 18+ installed
- Basic JavaScript knowledge
- Text editor (Antigravity (or VSCode) recommended)

---

## Setup Instructions

1. **Navigate to the tutorial folder:**

```bash
cd client-tutorial
```

2. **Copy environment file:**

```bash
cp .env.example .env
```

3. **Install dependencies** (already done if you followed setup):

```bash
npm install
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Make sure the backend is running:**

```bash
# In another terminal, from the project root:
cd server
npm start
```

The app should open at `http://localhost:5173`

---

## Using Your Gemini API Key

The app uses the Gemini API for AI-powered PokAImon generation. To provide your API key:

### Getting Your API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key or copy an existing one

### Using the `useApiKey` Hook

The app includes an `ApiKeyContext` that manages your API key securely in browser storage. Use the `useApiKey` hook to access and include it in API calls:

```jsx
import { useApiKey } from "../context/ApiKeyContext";

function YourComponent() {
  const { apiKey } = useApiKey();

  const makeApiCall = async () => {
    const res = await fetch(`${API}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        doodle_data: base64,
        gemini_api_key: apiKey, // Include the API key
      }),
    });
    // ... handle response
  };
}
```

The `useApiKey` hook provides:

- `apiKey` - The current API key (or empty string if not set)
- `updateApiKey(newKey)` - Update the stored API key
- `clearApiKey()` - Remove the stored API key

Your API key is stored locally in your browser and never sent to our backend except as part of API requests to generate PokAImon.

---
