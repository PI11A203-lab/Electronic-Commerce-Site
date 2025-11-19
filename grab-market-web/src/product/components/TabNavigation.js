import React from 'react';
import OverviewTab from './OverviewTab';
import ProjectsTab from './ProjectsTab';
import ReviewsTab from './ReviewsTab';

export default function TabNavigation({ activeTab, onTabChange, developer }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mb-6">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => onTabChange('overview')}
          className={`flex-1 py-4 font-semibold transition ${
            activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => onTabChange('projects')}
          className={`flex-1 py-4 font-semibold transition ${
            activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => onTabChange('reviews')}
          className={`flex-1 py-4 font-semibold transition ${
            activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Reviews ({developer.reviewCount})
        </button>
      </div>
      <div className="p-8">
        {activeTab === 'overview' && <OverviewTab hexagonStats={developer.hexagonStats} />}
        {activeTab === 'projects' && <ProjectsTab projects={developer.projects} />}
        {activeTab === 'reviews' && <ReviewsTab reviews={developer.reviews} />}
      </div>
    </div>
  );
}

