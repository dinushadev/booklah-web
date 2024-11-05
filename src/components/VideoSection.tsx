
const VideoSection = () => (
  <section id="video" className="py-32 px-6">
    <div className="container mx-auto">
      <h3 className="text-5xl font-bold text-center mb-20">See BookLah in Action</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="BookLah Product Explanation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-center mt-10 text-2xl">
        Watch our 30-second video to see how BookLah can transform your scheduling experience.
      </p>
    </div>
  </section>
);

export default VideoSection;