import { sql } from '@vercel/postgres';

export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
    if (type) {
        const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
        return rows;
    }

    const { rows } = await sql<Project>`
    SELECT * FROM projects ORDER BY id
  `;

    return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
    const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;

    return rows[0] ?? null;
}

export const ITEMS_PER_PAGE = 6;

export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const cleanQuery = query.trim();
  const offset = Math.max(0, (currentPage - 1) * ITEMS_PER_PAGE);

  if (cleanQuery) {
    const search = `%${cleanQuery}%`;

    const { rows } = await sql<Project>`
      SELECT *
      FROM projects
      WHERE title ILIKE ${search}
         OR description ILIKE ${search}
         OR EXISTS (
           SELECT 1
           FROM unnest(technologies) AS tech
           WHERE tech ILIKE ${search}
         )
      ORDER BY id
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset}
    `;

    return rows;
  }

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return rows;
}

export async function fetchProjectsPages(query: string): Promise<number> {
  const cleanQuery = query.trim();

  if (cleanQuery) {
    const search = `%${cleanQuery}%`;

    const { rows } = await sql<{ count: string }>`
      SELECT COUNT(*)::text AS count
      FROM projects
      WHERE title ILIKE ${search}
         OR description ILIKE ${search}
         OR EXISTS (
           SELECT 1
           FROM unnest(technologies) AS tech
           WHERE tech ILIKE ${search}
         )
    `;

    return Math.ceil(
      Number(rows[0]?.count ?? 0) / ITEMS_PER_PAGE
    );
  }

  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*)::text AS count
    FROM projects
  `;

  return Math.ceil(
    Number(rows[0]?.count ?? 0) / ITEMS_PER_PAGE
  );
}