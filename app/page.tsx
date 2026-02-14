'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  Zap,
  Eye,
  Clock,
  ArrowUpRight,
  Star,
  MessageSquare,
  Share2
} from 'lucide-react';

interface WebsiteSubmission {
  id: string;
  url: string;
  title: string;
  submitter: string;
  insights: number;
  tips: number;
  timestamp: string;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'submissions' | 'insights'>('dashboard');
  const [submissions, setSubmissions] = useState<WebsiteSubmission[]>([
    {
      id: '1',
      url: 'https://example.com',
      title: 'Example Website Analysis',
      submitter: '@analyst1',
      insights: 12,
      tips: 0.05,
      timestamp: '2h ago'
    },
    {
      id: '2',
      url: 'https://demo.com',
      title: 'Demo Site Performance Review',
      submitter: '@webexpert',
      insights: 8,
      tips: 0.03,
      timestamp: '5h ago'
    }
  ]);

  useEffect(() => {
    setMounted(true);
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-slow">
          <BarChart3 className="w-12 h-12 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8">
      {/* Header */}
      <header className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              WebInsight Social
            </h1>
            <p className="text-muted text-sm md:text-base">
              Collaborative website analytics on Base
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Submit Site
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 glass-effect rounded-lg p-1">
          {(['dashboard', 'submissions', 'insights'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'text-muted hover:text-fg'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {/* Dashboard View */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6 animate-fade-in">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat-card">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <span className="badge badge-success">+12%</span>
              </div>
              <div className="text-2xl font-bold mb-1">2,847</div>
              <div className="text-sm text-muted">Total Analyses</div>
            </div>

            <div className="stat-card">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <span className="badge badge-success">+8%</span>
              </div>
              <div className="text-2xl font-bold mb-1">1,234</div>
              <div className="text-sm text-muted">Active Analysts</div>
            </div>

            <div className="stat-card">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-success/20 rounded-lg">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <span className="badge badge-warning">Live</span>
              </div>
              <div className="text-2xl font-bold mb-1">0.85 ETH</div>
              <div className="text-sm text-muted">Tips Distributed</div>
            </div>

            <div className="stat-card">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-warning/20 rounded-lg">
                  <Award className="w-5 h-5 text-warning" />
                </div>
                <span className="badge badge-success">+15%</span>
              </div>
              <div className="text-2xl font-bold mb-1">456</div>
              <div className="text-sm text-muted">Badges Earned</div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Traffic Report */}
            <div className="chart-container">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Traffic Report</h3>
                <button className="text-sm text-muted hover:text-fg">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-bg/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-12 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-semibold">Direct Traffic</div>
                      <div className="text-sm text-muted">86% Bounce Rate</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">2,847</div>
                    <div className="text-xs text-muted">visits</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-bg/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-12 bg-accent rounded-full"></div>
                    <div>
                      <div className="font-semibold">Social Media</div>
                      <div className="text-sm text-muted">72% Engagement</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-accent">1,234</div>
                    <div className="text-xs text-muted">visits</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Sources */}
            <div className="chart-container">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Event Sources</h3>
                <button className="text-sm text-muted hover:text-fg">
                  Discover Storage
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Farcaster Frames', value: 75, color: 'bg-primary' },
                  { name: 'Direct Links', value: 55, color: 'bg-accent' },
                  { name: 'Embedded Widgets', value: 35, color: 'bg-success' },
                  { name: 'API Integrations', value: 25, color: 'bg-warning' }
                ].map((source) => (
                  <div key={source.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{source.name}</span>
                      <span className="text-sm font-semibold">{source.value}%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${source.color} rounded-full transition-all duration-300`}
                        style={{ width: `${source.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="chart-container">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { user: '@analyst1', action: 'submitted analysis for', site: 'example.com', time: '2m ago', icon: BarChart3 },
                { user: '@webexpert', action: 'earned a badge', site: 'Senior Analyst', time: '15m ago', icon: Award },
                { user: '@researcher', action: 'tipped 0.01 ETH to', site: '@analyst1', time: '1h ago', icon: Zap }
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-bg/30 rounded-lg hover:bg-bg/50 transition-all duration-200">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <activity.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm">
                      <span className="font-semibold text-primary">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-semibold">{activity.site}</span>
                    </div>
                    <div className="text-xs text-muted">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Submissions View */}
      {activeTab === 'submissions' && (
        <div className="space-y-4 animate-fade-in">
          {submissions.map((submission) => (
            <div key={submission.id} className="card hover:border-primary/50 transition-all duration-200 cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{submission.title}</h3>
                  <a href={submission.url} className="text-sm text-primary hover:underline flex items-center gap-1">
                    {submission.url}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <button className="btn-primary text-sm py-2 px-4">
                  Analyze
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {submission.submitter}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {submission.insights} insights
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  {submission.tips} ETH tips
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {submission.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Insights View */}
      {activeTab === 'insights' && (
        <div className="space-y-4 animate-fade-in">
          <div className="card">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">@analyst1</span>
                  <span className="badge badge-success">Top Contributor</span>
                  <span className="text-sm text-muted">2h ago</span>
                </div>
                <p className="text-sm mb-3">
                  Excellent performance metrics on this site. The Core Web Vitals are outstanding with LCP under 2.5s and FID below 100ms. However, there's room for improvement in the mobile experience.
                </p>
                <div className="flex items-center gap-3">
                  <button className="btn-primary text-sm py-1 px-3 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Tip 0.01 ETH
                  </button>
                  <button className="text-sm text-muted hover:text-fg flex items-center gap-1">
                    <Share2 className="w-3 h-3" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">@webexpert</span>
                  <span className="badge badge-warning">Rising Star</span>
                  <span className="text-sm text-muted">5h ago</span>
                </div>
                <p className="text-sm mb-3">
                  The SEO structure is well-optimized with proper heading hierarchy and meta descriptions. Recommend implementing structured data for better search visibility.
                </p>
                <div className="flex items-center gap-3">
                  <button className="btn-primary text-sm py-1 px-3 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Tip 0.01 ETH
                  </button>
                  <button className="text-sm text-muted hover:text-fg flex items-center gap-1">
                    <Share2 className="w-3 h-3" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
