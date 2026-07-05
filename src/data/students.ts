export type Student = {
  id: string;
  name: string;
  photo: string;
  reflectionImages?: string[];
  reflectionText?: string;
};

export const students: Student[] = [
  {
    id: "amy",
    name: "Amy",
    photo: "/assets/students/amy-photo.svg",
    reflectionImages: ["/assets/reflections/amy-reflection-1.svg"],
  },
  {
    id: "ben",
    name: "Ben",
    photo: "/assets/students/ben-photo.svg",
    reflectionText:
      "這裡可以放學生的心得文字。正式上線前，只要把這段改成學生提供的內容即可，版面會自動在手機上保持易讀。",
  },
  {
    id: "cara",
    name: "Cara",
    photo: "/assets/students/cara-photo.svg",
    reflectionImages: [
      "/assets/reflections/cara-reflection-1.svg",
      "/assets/reflections/cara-reflection-2.svg",
    ],
    reflectionText:
      "此範例同時包含心得文字與心得圖片，適合內容比較多、想保留原稿圖片又補充說明的學生頁。",
  },
];

export function findStudentById(id: string) {
  return students.find((student) => student.id === id);
}
