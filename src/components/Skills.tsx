import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Habilidades
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full mb-12" />
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${skill.color}`} />
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm text-zinc-500">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800">
                <div
                  className={`h-full rounded-full ${skill.color} transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
