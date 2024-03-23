import { NextResponse } from "next/server";
import data from "../../../../public/data.json";

// export const GET = (req, res) => {
//   let projects = data;
//   const url = new URL(req.url);
//   const id = url.searchParams.get("id");
//   console.log(id);
//   if (id) {
//     projects = projects.filter((p) => p.id === +id);
//   }
//   return NextResponse.json(projects);
// };
export const GET = (req, res) => {
  let projects = data;
  const url = new URL(req.url);
  const category = url.searchParams.get("category");

  if ((category && category === "front-end") || category === "full-stack") {
    projects = projects.filter((p) => p.category === category);
  }

  return NextResponse.json(projects);
};
