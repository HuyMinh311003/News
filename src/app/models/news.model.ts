export interface News {
  id: number,
  title: string,
  description: string,
  readable_publish_date: string,
  social_image: string,
  user: {
    name: string,
    profile_image_90: string
  }
}
