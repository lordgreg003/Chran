// utils/fetchData.ts

import { BlogPost, getPostBySlug } from "@/redux/blogSlice";
import { AppDispatch } from "@/redux/store";

export async function fetchData(
  slug: string,
  dispatch: AppDispatch
): Promise<BlogPost | undefined> {
  try {
    const response = await dispatch(getPostBySlug(slug)).unwrap();
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
