"use client";

import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface Workflow {
  title: string;
  steps: WorkflowStep[];
}

export interface EnhancedFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  workflow?: Workflow;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function EnhancedFeatureCard({
  icon,
  title,
  description,
  workflow,
  isExpanded,
  onToggle,
}: EnhancedFeatureCardProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-white border-t-4 border-[#0EA4CC] shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="text-[#0EA4CC] mb-4">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>

        {workflow && (
          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-[#0EA4CC] font-semibold hover:text-[#0EA4CC]/80 transition-colors"
          >
            See How It Works
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        )}
      </div>

      {/* Animated Expandable Workflow */}
      <AnimatePresence initial={false}>
        {workflow && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-gray-50"
          >
            <div className="p-6">
              <h4 className="mb-4 text-lg font-semibold text-gray-800">
                {workflow.title}
              </h4>
              <div className="space-y-6">
                {workflow.steps.map((step, index) => (
                  <motion.div
                    key={step.stepNumber}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0EA4CC] text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {step.stepNumber}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <h5 className="mb-1 font-semibold text-gray-800">
                        {step.title}
                      </h5>
                      <p className="mb-3 text-sm text-gray-600">
                        {step.description}
                      </p>

                      {step.imageSrc && (
                        <div className="relative w-full overflow-hidden bg-white border border-gray-200 rounded-lg aspect-square">
                          <Image
                            src={step.imageSrc}
                            alt={step.imageAlt || `Step ${step.stepNumber}`}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
