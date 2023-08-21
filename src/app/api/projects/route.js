import { NextResponse } from "next/server";
import data from "../../../../public/data.json";

export const GET = (req, res) => {
  let projects = data;
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (id) {
    projects = projects.filter((p) => p.id === +id);
  }
  return NextResponse.json(projects);
};
