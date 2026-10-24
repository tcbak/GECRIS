import { getCollection, type CollectionEntry } from 'astro:content';

/** Published (non-draft) news & events, newest publication date first. */
export async function getNews(): Promise<CollectionEntry<'news'>[]> {
  const all = await getCollection('news', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Events whose event date is today or later, soonest first. */
export async function getUpcomingEvents(now = new Date()): Promise<CollectionEntry<'news'>[]> {
  const today = new Date(now.toISOString().slice(0, 10));
  return (await getNews())
    .filter((n) => n.data.type === 'event' && (n.data.eventEndDate ?? n.data.eventDate ?? n.data.date) >= today)
    .sort((a, b) => (a.data.eventDate ?? a.data.date).valueOf() - (b.data.eventDate ?? b.data.date).valueOf());
}
