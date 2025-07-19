// components/home/Testimonials.tsx
import { testimonials } from '@/data/data';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center text-primary mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-light p-8 rounded-lg border border-medium shadow-sm">
                            <Quote className="text-primary/50" size={48} />
                            {/* Escaped double quotes with &quot; */}
                            <p className="text-dark/90 my-4 text-lg italic">&quot;{testimonial.quote}&quot;</p>
                            <p className="font-bold text-secondary text-right">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;