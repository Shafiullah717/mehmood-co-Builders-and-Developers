// components/projects/ProjectLocationMap.tsx
interface ProjectLocationMapProps {
  mapUrl: string;
  projectName: string;
}

const ProjectLocationMap: React.FC<ProjectLocationMapProps> = ({ mapUrl, projectName }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-medium p-4">
      {/* Aspect-ratio box for responsive iframe */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
        {/*
          IMPORTANT: Replace the placeholder `mapUrl` from data.ts
          with an actual Google Maps embed URL.
          Go to Google Maps -> Search location -> Share -> Embed a map -> Copy HTML
          Extract the `src` attribute value.
          Example: <iframe src="YOUR_EMBED_URL_HERE" ...></iframe>
        */}
        <iframe
          src={mapUrl}
          title={`${projectName} Location on Google Maps`}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full border-none rounded-md"
        ></iframe>
      </div>
      <p className="text-sm text-dark/70 mt-4 text-center">
        Click on the map to explore the location in detail.
      </p>
    </div>
  );
};

export default ProjectLocationMap;