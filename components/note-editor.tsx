"use cleint";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import {
  BlockNoteView,
  Theme,
  useBlockNote,
  darkDefaultTheme,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

interface NoteEditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const NoteEditor = ({
  onChange,
  initialContent,
  editable,
}: NoteEditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
  });

  const darkTheme = {
    ...darkDefaultTheme,
    colors: {
      ...darkDefaultTheme.colors,
      editor: {
        text: darkDefaultTheme.colors.editor.text,
        background: "#0A0A0A",
      },
      sideMenu: "#ffffff",
      highlightColors: darkDefaultTheme.colors.highlightColors,
    },
  } satisfies Theme;

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? darkTheme : "light"}
      />
    </div>
  );
};

export default NoteEditor;
