import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  prefix?: string;
}

export function CopyGuard({
  children,
  prefix = "⚠️ Internal Data\n\n",
}: Props) {
  const onCopy = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const text = window.getSelection()?.toString();

    if (!text) return;

    e.clipboardData.setData("text/plain", prefix + text);

    e.preventDefault();
  };

  return <div onCopy={onCopy}>{children}</div>;
}
