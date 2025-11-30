import { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

export default function Components() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Checkbox Component
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A responsive, accessible checkbox component with multiple states and
            device-specific styling
          </p>
        </div>

        <div className="text-center mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-light-purple hover:text-light-purple/80 font-medium transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="currentColor"
              />
            </svg>
            <span>Back to Button Components</span>
          </Link>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Basic Checkboxes
            </h2>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-8 items-center">
                <Checkbox label="Checkbox" />
                <Checkbox label="Checkbox" checked />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Disabled States
            </h2>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-8 items-center">
                <Checkbox label="Checkbox" disabled />
                <Checkbox label="Checkbox" checked disabled />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Interactive Demo
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 sm:p-12">
              <p className="text-gray-600 mb-6">
                Toggle these checkboxes to see them in action:
              </p>
              <div className="space-y-4">
                <Checkbox
                  label="Subscribe to newsletter"
                  checked={checked1}
                  onCheckedChange={setChecked1}
                />
                <Checkbox
                  label="Accept terms and conditions"
                  checked={checked2}
                  onCheckedChange={setChecked2}
                />
                <Checkbox
                  label="Remember my preferences"
                  checked={checked3}
                  onCheckedChange={setChecked3}
                />
              </div>
              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Current State:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    Newsletter: {checked1 ? "✓ Subscribed" : "✗ Not subscribed"}
                  </li>
                  <li>Terms: {checked2 ? "✓ Accepted" : "✗ Not accepted"}</li>
                  <li>Preferences: {checked3 ? "✓ Saved" : "✗ Not saved"}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Responsive Design
            </h2>
            <p className="text-gray-600 mb-8">
              Checkboxes automatically adjust their size based on screen width:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border-2 border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Desktop/Tablet
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  24px icon, 18px text
                </p>
                <Checkbox label="Checkbox" />
              </div>
              <div className="p-6 border-2 border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-4">Mobile</p>
                <p className="text-xs text-gray-500 mb-4">
                  32px icon, 16px text
                </p>
                <Checkbox label="Checkbox" />
              </div>
              <div className="p-6 border-2 border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Checked State
                </p>
                <p className="text-xs text-gray-500 mb-4">With checkmark</p>
                <Checkbox label="Checkbox" checked />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Form Example
            </h2>
            <div className="max-w-2xl">
              <form className="space-y-6 p-8 border-2 border-gray-200 rounded-xl">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Preferences
                  </h3>
                  <div className="space-y-3">
                    <Checkbox label="Email notifications" />
                    <Checkbox label="SMS notifications" />
                    <Checkbox label="Push notifications" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Privacy Settings
                  </h3>
                  <div className="space-y-3">
                    <Checkbox label="Share data with partners" />
                    <Checkbox label="Allow analytics tracking" checked />
                    <Checkbox label="Show profile publicly" />
                  </div>
                </div>

                <div className="pt-4">
                  <Checkbox label="I agree to the terms and conditions" />
                </div>
              </form>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Without Labels
            </h2>
            <div className="flex flex-wrap gap-6 items-center">
              <Checkbox />
              <Checkbox checked />
              <Checkbox disabled />
              <Checkbox checked disabled />
            </div>
          </section>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Pixel-Perfect Design
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Built to match the Figma design exactly, with responsive sizing
              and proper color states
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Checkbox label="Desktop optimized" checked />
              <Checkbox label="Tablet friendly" checked />
              <Checkbox label="Mobile responsive" checked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
