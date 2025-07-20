export function getTimeAgo(ts: number) {
  let timeAgo = '';
  const date = new Date(ts * 1000); // from timestap to miliseconds;
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSec / 60);
  const diffHrs = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffMins / 24);
  if (diffSec < 60) timeAgo = `${diffSec} seconds`;
  else if (diffMins < 60) timeAgo = `${diffMins} minutes`;
  else if (diffHrs < 24) timeAgo = `${diffMins} hours`;
  else if (diffDays < 7) timeAgo = `${diffMins} days`;
  else {
    timeAgo = date.toLocaleDateString('en-En', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  }

  return timeAgo;
}
