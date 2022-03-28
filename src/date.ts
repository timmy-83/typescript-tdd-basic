export function date(article:{publicationDate: string}):boolean{
    const TWO_DAYS_IN_MS = 3600 * 24 * 1000 * 2;

    const todayTimestamp = +new Date();
  const publicationDateTimestamp = +new Date(article.publicationDate);
  return todayTimestamp - publicationDateTimestamp <= TWO_DAYS_IN_MS;
    

}