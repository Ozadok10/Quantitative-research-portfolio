/* Replace only the blank strings below with your confirmed public links and contact details. */
const portfolio = {
  ownerName: "Ofir Zadok",  // e.g. the name shown on your resume
  email: "Ozadok10@gmail.com",
  linkedin: "https://www.linkedin.com/in/ofir-zadok/", // full https://www.linkedin.com/in/... URL
  phone: "347-610-7188", // optional — leave blank to hide
  intradayDashboard: "https://public.tableau.com/app/profile/ofir.zadok/viz/IntradayMarketDirectionResearch/ExecutiveOverview", // public Tableau Public dashboard URL
  intradayGithub: "https://github.com/Ozadok10/intraday-market-direction-research", // published GitHub repository URL
  treasuryDashboard: "https://public.tableau.com/app/profile/ofir.zadok/viz/Treasury_Yield_Curve_Equity_Volatility/StatisticalEvidence", // public Tableau Public dashboard URL
  treasuryGithub: "https://github.com/Ozadok10/treasury-yield-equity-volatility" // published GitHub repository URL
};

(function () {
  const q = (selector) => document.querySelector(selector);
  if (portfolio.ownerName) {document.title = portfolio.ownerName + ' | Quantitative Research';q('.footer-inner span:first-child').textContent = portfolio.ownerName + ' · Quantitative Research';}
  const asLink = (selector, value, label, icon) => {
    const old=q(selector);if(!old||!value)return;
    const link=document.createElement('a');link.className=old.className.replace(/\s*disabled/g,'');
    link.href=value;link.target='_blank';link.rel='noopener noreferrer';link.textContent=label+' ';
    const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent=icon||'↗';link.appendChild(arrow);old.replaceWith(link);
  };
  if(portfolio.intradayDashboard)asLink('#intraday .actions .action:first-child',portfolio.intradayDashboard,'View dashboard');
  if(portfolio.intradayGithub)asLink('#intraday .actions .action:last-child',portfolio.intradayGithub,'View GitHub repository');
  if(portfolio.treasuryDashboard)asLink('#treasury .actions .action:first-child',portfolio.treasuryDashboard,'View dashboard');
  if(portfolio.treasuryGithub)asLink('#treasury .actions .action:last-child',portfolio.treasuryGithub,'View GitHub repository');
  const contact=(id,text,href)=>{const s=document.getElementById(id);if(!s||!href)return;const a=document.createElement('a');a.href=href;a.textContent=text;a.rel='noopener noreferrer';if(href.startsWith('http'))a.target='_blank';s.replaceWith(a)};
  if(portfolio.email)contact('email-slot',portfolio.email,'mailto:'+portfolio.email);
  contact('linkedin-slot','LinkedIn',portfolio.linkedin);
  if(portfolio.phone)contact('phone-slot',portfolio.phone,'tel:'+portfolio.phone.replace(/[^+\d]/g,''));else document.getElementById('phone-slot').remove();
})();
