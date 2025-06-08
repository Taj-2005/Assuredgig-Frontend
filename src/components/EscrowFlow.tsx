'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EscrowFlow() {
    const steps = [
      { step: 'Post Gig', description: 'Client posts the gig with details.' },
      { step: 'Freelancer Applies', description: 'Freelancer submits portfolio.' },
      { step: 'Work Submitted', description: 'Freelancer completes and submits work.' },
      { step: 'Client Approves', description: 'Client reviews and approves work.' },
      { step: 'Payment Sent', description: 'Client sends payment via platform.' },
      { step: 'Freelancer Paid', description: 'Platform transfers payment to freelancer.' },
    ];
  
    const router = useRouter();
  
    return (
      <section className="my-8">
        <h3 className="text-xl font-semibold text-cyan-700 mb-4">Transaction Flow</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="bg-cyan-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
                {index + 1}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{step.step}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
          <Button 
            className="mt-4 bg-accent hover:bg-accent/90 text-white"
            onClick={() => router.push('/contract')}
          >
            Start Escrow
          </Button>
        </div>
      </section>
    );
  }