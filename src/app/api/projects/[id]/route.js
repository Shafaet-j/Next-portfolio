import { NextResponse } from "next/server";
import data from "../../../../../public/data.json";

export const GET = (req, { params }) => {
  const project = data.find((p) => p.id === +params.id);
  if (project) {
    return NextResponse.json(project);
  }
  return NextResponse.json({ message: "Project not found" }, { status: 404 });
};
