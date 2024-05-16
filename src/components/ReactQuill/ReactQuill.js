import React, { useMemo } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const modules = useMemo(
	() => ({
		toolbar: {
			container: [
				[{ header: [2, 3, 4, false] }],
				["bold", "italic", "underline", "blockquote"],
				[{ color: [] }],
				[
					{ list: "ordered" },
					{ list: "bullet" },
					{ indent: "-1" },
					{ indent: "+1" },
				],
				["code-block"],
				[("link", "image")],
				[{ script: "sub" }, { script: "super" }],
			],
		},
		clipboard: {
			matchVisual: true,
		},
	}),
	[]
);
