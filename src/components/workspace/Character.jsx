import React from "react";

// A stylized SVG character representing Hanaa inside the workspace.
// Placeholder until the real photo is uploaded — built to be swapped out.
export default function Character({ pose = "designing", className = "" }) {
  // poses: designing | thinking | waving | coffee
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Stylized illustration of Hanaa at her workspace"
    >
      {/* chair back */}
      <rect x="64" y="120" width="72" height="60" rx="10" fill="hsl(0 0% 99%)" stroke="hsl(0 0% 6%)" strokeWidth="3" />
      {/* body */}
      <rect x="70" y="86" width="60" height="48" rx="14" fill="hsl(217 100% 61%)" stroke="hsl(0 0% 6%)" strokeWidth="3" />
      {/* head */}
      <circle cx="100" cy="64" r="26" fill="hsl(36 45% 78%)" stroke="hsl(0 0% 6%)" strokeWidth="3" />
      {/* hair */}
      <path d="M74 60 Q72 38 100 36 Q128 38 126 60 Q126 50 116 48 Q108 40 100 42 Q92 40 84 48 Q74 50 74 60 Z" fill="hsl(20 60% 22%)" stroke="hsl(0 0% 6%)" strokeWidth="3" />
      {/* face */}
      {pose === "thinking" ? (
        <>
          <circle cx="92" cy="64" r="2.5" fill="hsl(0 0% 6%)" />
          <circle cx="110" cy="62" r="2.5" fill="hsl(0 0% 6%)" />
          <path d="M96 76 Q104 80 112 75" fill="none" stroke="hsl(0 0% 6%)" strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : pose === "waving" ? (
        <>
          <path d="M90 62 L96 62 M104 62 L110 62" stroke="hsl(0 0% 6%)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M94 74 Q100 80 106 74" fill="none" stroke="hsl(0 0% 6%)" strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="92" cy="64" r="2.5" fill="hsl(0 0% 6%)" />
          <circle cx="110" cy="64" r="2.5" fill="hsl(0 0% 6%)" />
          <path d="M94 72 Q100 78 106 72" fill="none" stroke="hsl(0 0% 6%)" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {/* arm designing / coffee */}
      {pose === "coffee" ? (
        <>
          <rect x="118" y="92" width="16" height="20" rx="3" fill="hsl(13 76% 61%)" stroke="hsl(0 0% 6%)" strokeWidth="3" />
          <path d="M134 96 Q142 100 138 108" fill="none" stroke="hsl(0 0% 6%)" strokeWidth="3" strokeLinecap="round" />
          <path d="M150 60 Q156 54 150 48" fill="none" stroke="hsl(0 0% 6%)" strokeWidth="2" strokeLinecap="round" />
          <text x="146" y="46" fontSize="12" fill="hsl(0 0% 6%)">~</text>
        </>
      ) : (
        <>
          <path d="M128 96 Q150 84 150 70" fill="none" stroke="hsl(0 0% 6%)" strokeWidth="3" strokeLinecap="round" />
          <rect x="140" y="58" width="20" height="14" rx="2" fill="hsl(50 100% 64%)" stroke="hsl(0 0% 6%)" strokeWidth="3" />
        </>
      )}
      {pose === "waving" && (
        <path d="M70 96 Q50 80 48 60" fill="none" stroke="hsl(0 0% 6%)" strokeWidth="3" strokeLinecap="round" />
      )}
      {/* desk */}
      <rect x="40" y="134" width="120" height="10" rx="3" fill="hsl(0 0% 6%)" />
      {/* monitor */}
      <rect x="46" y="96" width="44" height="34" rx="3" fill="hsl(0 0% 99%)" stroke="hsl(0 0% 6%)" strokeWidth="3" />
      <rect x="50" y="100" width="36" height="22" rx="1" fill="hsl(173 57% 39%)" />
      <rect x="64" y="130" width="8" height="6" fill="hsl(0 0% 6%)" />
      {/* sticker on monitor */}
      <rect x="48" y="98" width="10" height="8" fill="hsl(0 84% 82%)" stroke="hsl(0 0% 6%)" strokeWidth="1.5" />
    </svg>
  );
}