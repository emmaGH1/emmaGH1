#!/usr/bin/env python3
"""draw random idea seeds from decks.md.

usage:
  python3 draw.py PRIMITIVES_FILE [--n 10] [--seed 42]

PRIMITIVES_FILE: one sponsor primitive per line starting with "- ",
written by the agent from the sponsor docs for this hackathon
(e.g. docs/PRIMITIVES.md). prefer least-hyped features.

each seed = craft x person x primitive x twist, plus one unfair input.
"""
import argparse
import pathlib
import random
import re

HERE = pathlib.Path(__file__).resolve().parent


def cards(text, section=None):
    if section:
        m = re.search(rf"^## {section}\s*$(.*?)(?=^## |\Z)", text, re.M | re.S)
        if not m:
            raise SystemExit(f"section '{section}' not found in decks.md")
        text = m.group(1)
    return [l[2:].strip() for l in text.splitlines() if l.startswith("- ") and l[2:].strip()]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("primitives")
    ap.add_argument("--n", type=int, default=10)
    ap.add_argument("--seed", type=int, default=None)
    a = ap.parse_args()

    decks = (HERE / "decks.md").read_text()
    crafts, people, twists, unfair = (cards(decks, s) for s in ("crafts", "people", "twists", "unfair inputs"))
    prims = cards(pathlib.Path(a.primitives).read_text())
    if not prims:
        raise SystemExit("no primitives found. write one per line starting with '- '.")

    rng = random.Random(a.seed)
    c, p, t = rng.sample(crafts, min(a.n, len(crafts))), rng.sample(people, min(a.n, len(people))), rng.sample(twists, min(a.n, len(twists)))
    for i in range(a.n):
        print(f"{i + 1}. craft: {c[i % len(c)]}")
        print(f"   person: {p[i % len(p)]}")
        print(f"   primitive: {rng.choice(prims)}")
        print(f"   twist: {t[i % len(t)]}")
        print(f"   unfair input: {rng.choice(unfair)}\n")


if __name__ == "__main__":
    main()
