export const Constants = {
  None: 'none',
  NotAvailable: 'N/A',
  AdminUserGroup: 'admin_users_group',
  DefaultApiCacheExpiryHours: 12,
  DefaultSubscriptionTopics: ['NLP', 'MLR', 'CVS'],
  HeaderMenu: [
    { uniqueId: 'HOME', displayName: 'Home', navUrl: '/', showOnMobile: true },
    {
      uniqueId: 'My_Feeds',
      displayName: 'Feeds',
      navUrl: '/capsules',
      children: [
        { uniqueId: 'For_You', displayName: 'For You', navUrl: '/capsules/myfeeds' },
        { uniqueId: 'Trending', displayName: 'Trending', navUrl: '/capsules/trending' },
        { uniqueId: 'Editor_Pick', displayName: 'Editor Pick', navUrl: '/capsules/editorspick' },
        { uniqueId: 'BROWSE_BYTOPIC', displayName: 'Explore Topic', navUrl: '' },
      ],
    },
    { 
      uniqueId: 'Skill_Studio', 
      displayName: 'AI Hub', 
      navUrl: '/ai-hub/dashboard',
      children: [
        { uniqueId: 'Tekbyte', displayName: 'Tekbyte', navUrl: '/ai-hub/tekbyte/explore' },
        { uniqueId: 'Courses', displayName: 'Courses', navUrl: '/ai-hub/courses' },
        { uniqueId: 'Mentoring', displayName: 'Mentoring', navUrl: '/ai-hub/mentoring' },
        { uniqueId: 'Weekly_Digest', displayName: 'Weekly Digest', navUrl: '/ai-hub/weekly-digest' },
        { uniqueId: 'Interview_Prep', displayName: 'Interview Prep', navUrl: '/ai-hub/interview-prepartion' },
        { uniqueId: 'Events', displayName: 'Events', navUrl: '/ai-hub/events' },
        { uniqueId: 'Video_Library', displayName: 'Video Library', navUrl: '/ai-hub/video-library' },
        { uniqueId: 'Research_Papers', displayName: 'Research papers', navUrl: '/ai-hub/research-papers' },
      ], 
    },
    {
      uniqueId: 'Contribute',
      displayName: 'Contribute',
      navUrl: 'capsules/contribute',
      showOnMobile: true,
    },
    { uniqueId: 'Community', displayName: 'Community', navUrl: '/community' },
    { uniqueId: 'Our_Mission', displayName: 'Our Mission', navUrl: '/mission' },
    { uniqueId: 'Market_Place', displayName: 'Market Place', navUrl: '/market-place' },
  ],
  SkillTiles: [
    {uniqueId: 'tekbytes', displayName: 'Tekbytes', desc: 'Get your AI Vocabulary Right', navUrl:'/ai-hub/tekbyte/explore'},
    {uniqueId: 'weeklyDigest', displayName: 'Weekly Digest', desc: 'Get your weekly digest from us', navUrl:'/ai-hub/weekly-digest'},
    {uniqueId: 'events', displayName: 'Events', desc: 'Get ahead in your AI journey with our Events', navUrl:'/ai-hub/events'},
    {uniqueId: 'courses', displayName: 'Courses', desc: 'Get ahead in your AI journey with our cutting edge courses', navUrl:'/ai-hub/courses'},
    {uniqueId: 'interviewPrep', displayName: 'Interview Prep', desc: 'Go ahead and prepare for your interview', navUrl:'/ai-hub/interview-prepartion'},
    {uniqueId: 'mentoring', displayName: 'Mentoring', desc: 'Mentoring is our top priority for the people need mentor', navUrl:'/ai-hub/mentoring'},

    {uniqueId: 'prompts', displayName: 'Prompts', desc: 'Get your AI Vocabulary Right', navUrl:'/ai-hub/prompts'},
    {uniqueId: 'Video_Library', displayName: 'Video Library', desc: 'Get your weekly digest from us', navUrl:'/ai-hub/video-library'},
    {uniqueId: 'Research_Papers', displayName: 'Research Papers', desc: 'View the research papers', navUrl:'/ai-hub/research-papers'},
    {uniqueId: 'largeLanguageModel', displayName: 'Large Language Model (LLM)', desc: 'Get ahead in your AI journey with our cutting edge courses', navUrl:'/ai-hub/courses'},
    {uniqueId: 'generativeAI', displayName: 'Generative AI', desc: 'Go ahead and prepare for your interview', navUrl:'/ai-hub/interview-prepartion'},
    {uniqueId: 'insights', displayName: 'Insights', desc: 'Mentoring is our top priority for the people need mentor', navUrl:'/ai-hub/mentoring'}
  ]
};

Object.freeze(Constants);
