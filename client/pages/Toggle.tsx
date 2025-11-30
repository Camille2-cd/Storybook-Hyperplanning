import { useState } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { Link } from 'react-router-dom';

export default function TogglePage() {
  const [desktopActivated, setDesktopActivated] = useState(true);
  const [desktopDeactivated, setDesktopDeactivated] = useState(false);
  const [tabletActivated, setTabletActivated] = useState(true);
  const [tabletDeactivated, setTabletDeactivated] = useState(false);
  const [mobileActivated, setMobileActivated] = useState(true);
  const [mobileDeactivated, setMobileDeactivated] = useState(false);

  return (
    <div className="min-h-screen bg-[#E7E7FF]">
      <div className="rounded-t-3xl p-8 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Toggle
        </h1>
        <p className="text-base md:text-lg text-black">
          The toggle component allows users to choose between two opposite states (activated / deactivated).
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-light-purple hover:text-light-purple/80 font-medium transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg border-2 border-dashed border-light-purple/30 p-6 md:p-8 overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="pb-6"></th>
                <th className="pb-6 px-4">
                  <div className="bg-white px-6 py-2 font-bold text-base text-black text-center rounded shadow-sm">
                    Activated
                  </div>
                </th>
                <th className="pb-6 px-4">
                  <div className="bg-white px-6 py-2 font-bold text-base text-black text-center rounded shadow-sm">
                    Deactivated
                  </div>
                </th>
                <th className="pb-6 px-4">
                  <div className="bg-white px-6 py-2 font-bold text-base text-black text-center rounded shadow-sm">
                    Activated - Disabled
                  </div>
                </th>
                <th className="pb-6 px-4">
                  <div className="bg-white px-6 py-2 font-bold text-base text-black text-center rounded shadow-sm">
                    Deactivated - Disabled
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-6 pr-8">
                  <div className="bg-white px-6 py-2 font-bold text-base text-black text-center rounded shadow-sm whitespace-nowrap">
                    Desktop
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={desktopActivated} 
                      onChange={setDesktopActivated}
                      size="desktop"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={desktopDeactivated} 
                      onChange={setDesktopDeactivated}
                      size="desktop"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={true} 
                      disabled={true}
                      size="desktop"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={false} 
                      disabled={true}
                      size="desktop"
                    />
                  </div>
                </td>
              </tr>

              <tr className="border-t border-gray-200">
                <td className="py-6 pr-8">
                  <div className="bg-white px-6 py-2 font-bold text-base text-black text-center rounded shadow-sm whitespace-nowrap">
                    Tablet
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={tabletActivated} 
                      onChange={setTabletActivated}
                      size="tablet"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={tabletDeactivated} 
                      onChange={setTabletDeactivated}
                      size="tablet"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={true} 
                      disabled={true}
                      size="tablet"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={false} 
                      disabled={true}
                      size="tablet"
                    />
                  </div>
                </td>
              </tr>

              <tr className="border-t border-gray-200">
                <td className="py-6 pr-8">
                  <div className="bg-white px-6 py-2 font-bold text-base text-black text-center rounded shadow-sm whitespace-nowrap">
                    Mobile
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={mobileActivated} 
                      onChange={setMobileActivated}
                      size="mobile"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={mobileDeactivated} 
                      onChange={setMobileDeactivated}
                      size="mobile"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={true} 
                      disabled={true}
                      size="mobile"
                    />
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex justify-center">
                    <Toggle 
                      checked={false} 
                      disabled={true}
                      size="mobile"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Custom Icons Example
          </h2>
          <p className="text-gray-600 mb-8">
            The toggle component accepts custom icons via props. Try toggling these examples:
          </p>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-6 rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Default Icons</h3>
                <p className="text-sm text-gray-600">Sun and moon icons for light/dark mode</p>
              </div>
              <Toggle checked={true} onChange={() => {}} />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-6 rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">No Icons</h3>
                <p className="text-sm text-gray-600">Toggle without any icons</p>
              </div>
              <Toggle 
                checked={false} 
                onChange={() => {}}
                leftIcon={null}
                rightIcon={null}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-6 rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Custom Text</h3>
                <p className="text-sm text-gray-600">Use text labels instead of icons</p>
              </div>
              <Toggle 
                checked={true} 
                onChange={() => {}}
                leftIcon={<span className="text-sm font-medium text-light-purple">ON</span>}
                rightIcon={<span className="text-sm font-medium text-gray-400">OFF</span>}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Component Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-light-purple/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-light-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Fully Responsive</h3>
                <p className="text-sm text-gray-600">Adapts to desktop, tablet, and mobile screens</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-light-purple/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-light-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Custom Icons</h3>
                <p className="text-sm text-gray-600">Support for custom left and right icons or text</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-light-purple/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-light-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Disabled State</h3>
                <p className="text-sm text-gray-600">Visual feedback for disabled toggles</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-light-purple/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-light-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Accessible</h3>
                <p className="text-sm text-gray-600">Built with proper ARIA attributes and keyboard support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
