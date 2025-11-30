import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Button Component Showcase
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A responsive, customizable button component with multiple variants,
            states, and icon positions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <Link
            to="/components"
            className="inline-flex items-center gap-2 text-light-purple hover:text-light-purple/80 font-medium transition-colors"
          >
            <span>View Checkbox Components</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <Link
            to="/toggle"
            className="inline-flex items-center gap-2 text-light-purple hover:text-light-purple/80 font-medium transition-colors"
          >
            <span>View Toggle Component</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Primary Buttons
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" label="Button" iconPosition="left" />
              <Button variant="primary" label="Button" iconPosition="right" />
              <Button variant="primary" label="Button" showIcon={false} />
              <Button variant="primary" label="Disabled" disabled />
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Secondary Buttons
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="secondary" label="Button" iconPosition="left" />
              <Button variant="secondary" label="Button" iconPosition="right" />
              <Button variant="secondary" label="Button" showIcon={false} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Tertiary Buttons
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="tertiary" label="Button" iconPosition="left" />
              <Button variant="tertiary" label="Button" iconPosition="right" />
              <Button variant="tertiary" label="Button" showIcon={false} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Link Buttons
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="link" label="Button" iconPosition="left" />
              <Button variant="link" label="Button" iconPosition="right" />
              <Button variant="link" label="Button" showIcon={false} />
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              Interactive Demo
            </h2>
            <p className="text-gray-600 mb-8">
              Click the buttons below to see them in action
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                label="Get Started"
                iconPosition="right"
                onClick={() => alert("Primary button clicked!")}
              />
              <Button
                variant="secondary"
                label="Learn More"
                iconPosition="left"
                onClick={() => alert("Secondary button clicked!")}
              />
              <Button
                variant="tertiary"
                label="View Details"
                showIcon={false}
                onClick={() => alert("Tertiary button clicked!")}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              Responsive Design
            </h2>
            <p className="text-gray-600 mb-8">
              Buttons automatically adjust their size based on screen width.
              Mobile devices use 14px font size, while tablets and desktops use
              16px.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-6 border-2 border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Mobile (auto)
                </p>
                <Button variant="primary" size="mobile" label="Button" />
              </div>
              <div className="p-6 border-2 border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Desktop
                </p>
                <Button variant="primary" size="desktop" label="Button" />
              </div>
              <div className="p-6 border-2 border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  With Custom Icon
                </p>
                <Button
                  variant="primary"
                  label="Custom"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </section>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Ready to use in your project
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Fully responsive, accessible, and customizable button component
              built with React, TypeScript, and Tailwind CSS
            </p>
            <Button
              variant="primary"
              label="View Documentation"
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
