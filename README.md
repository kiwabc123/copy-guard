# @kqjq/copy-guard

A React component that prepends a custom prefix when users copy text — useful for marking internal or sensitive content.

## Installation

```bash
npm install @kqjq/copy-guard
```

## Usage

```tsx
import { CopyGuard } from "@kqjq/copy-guard";

export default function App() {
  return (
    <CopyGuard>
      <p>This is internal content. Try copying this text.</p>
    </CopyGuard>
  );
}
```

When the user copies text inside `<CopyGuard>`, the clipboard will contain:

```
⚠️ Internal Data

This is internal content. Try copying this text.
```

## Props

| Prop       | Type        | Default                   | Description                              |
| ---------- | ----------- | ------------------------- | ---------------------------------------- |
| `children` | `ReactNode` | —                         | Content to protect                       |
| `prefix`   | `string`    | `"⚠️ Internal Data\n\n"` | Text prepended to the copied content |

## Custom Prefix

```tsx
<CopyGuard prefix="🔒 Confidential\n\n">
  <p>Sensitive data here.</p>
</CopyGuard>
```

## Requirements

- React 18+

## License

MIT
