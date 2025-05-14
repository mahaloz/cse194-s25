(function() {
  const scheduleTab          = document.getElementById('scheduleTab');
  const announcementsTab     = document.getElementById('announcementsTab');
  const prophilesTab          = document.getElementById('prophilesTab');
  const scheduleContent      = document.getElementById('scheduleContent');
  const announcementsContent = document.getElementById('announcementsContent');
  const prophilesContent      = document.getElementById('prophilesContent');


  const popupOverlay = document.getElementById('popupOverlay');
  const closeBtn     = document.getElementById('closeBtn');
  const popupInfo    = document.getElementById('popupInfo');
  const newBadge     = document.getElementById('newBadge');

  // Simple: parse "MM/DD"
  function parseClassDate(dateStr) {
    const match = dateStr.match(/^(\d{2})\/(\d{2})$/);
    if (!match) return null;
    const month = parseInt(match[1], 10);
    const day   = parseInt(match[2], 10);
    // Use current year
    const year  = new Date().getFullYear();
    return new Date(year, month - 1, day);
  }

  // Mark current/past classes
  function markCurrentAndPastClasses() {
    const now = new Date();
    document.querySelectorAll('.date-block').forEach(block => {
      // The below is commented because we no longer want to gray out old classes. 
      // If this code is used again in the future, just uncomment and delete the last line.
      // 
      //const dateStr = block.getAttribute('data-date');
      //const classDate = parseClassDate(dateStr);
      //if (!classDate) return;

      //// Sunday before
      //const sundayBefore = new Date(classDate);
      //sundayBefore.setDate( sundayBefore.getDate() - sundayBefore.getDay() );

      //// Sunday after
      //const sundayAfter = new Date(classDate);
      //sundayAfter.setDate( sundayAfter.getDate() + (7 - sundayAfter.getDay()) );

      //// If now is between sundayBefore and sundayAfter => current week
      //if (now >= sundayBefore && now <= sundayAfter) {
      //  block.classList.add('current-week');
      //}

      //// If 7 days past
      //const msDiff = now - classDate;
      //if (msDiff >= 7 * 24 * 60 * 60 * 1000) {
      //  block.classList.add('past-class');
      //}
      block.classList.add('currentWeek');
    });
  }

  // Show/hide "NEW" badge for announcements
  function checkAnnouncementsBadge() {
    const hasSeenAnnouncements = localStorage.getItem('hasSeenAnnouncements');
    if (!hasSeenAnnouncements || hasSeenAnnouncements === 'false') {
      newBadge.style.display = 'inline-block';
    }
  }

  function markAnnouncementsAsSeen() {
    localStorage.setItem('hasSeenAnnouncements', 'true');
    newBadge.style.display = 'none';
  }

  // Tab switching - only handle if we're on the home page
  if (window.location.pathname === '/') {
    scheduleTab.addEventListener('click', (e) => {
      e.preventDefault();
      scheduleTab.classList.add('active');
      announcementsTab.classList.remove('active');
      scheduleContent.classList.add('active');
      announcementsContent.classList.remove('active');
    });
  }

  prophilesTab.addEventListener('click', () => {
    window.location.href = '/prophiles.html';
  });

  // Show popup with the stored HTML
  document.querySelectorAll('.date-block').forEach(block => {
    block.addEventListener('click', () => {
      const infoHtml = block.getAttribute('data-info-html') || '<p>No info.</p>';
      popupInfo.innerHTML = infoHtml;   // Insert the rendered HTML
      popupOverlay.style.display = 'flex';

      // Re-run highlight.js for code in the popup
      window.hljs.highlightAll();
    });
  });

  // Close popup
  closeBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  });

  // On page load
  markCurrentAndPastClasses();
  checkAnnouncementsBadge();
})();
