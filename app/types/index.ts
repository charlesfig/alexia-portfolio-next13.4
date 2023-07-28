export type Image = {
  src: string;
  height: number;
  width: number;
};

export type Work = {
  preview: boolean;
  photo_id: number;
  project_id: number;
  project_name: string;
  image: Image;
  publication: string;
  className?: string;
};
