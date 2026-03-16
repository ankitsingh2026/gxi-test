"use client";

export default function JobFilters({
  employmentTypes,
  categories,
  jobLevel,
  setJobLevel,
  employmentType,
  setEmploymentType,
  category,
  setCategory,
  jobs,
  skillsList,
  selectedSkills,
  setSelectedSkills,
  skillQuery,
  setSkillQuery,
}: any) {
  return (
    <aside className="p-4">

      {/* Employment Type */}
      <h3 className="font-semibold mb-2">Employment Type</h3>

      {employmentTypes.map((type: string) => (
        <label key={type} className="block text-sm">
          <input
            type="radio"
            checked={employmentType === type}
            onChange={() => setEmploymentType(type)}
          />
          <span className="ml-2">{type}</span>
        </label>
      ))}

      <hr className="my-4" />

      {/* Category */}
      <h3 className="font-semibold mb-2">Category</h3>

      {categories.map((cat: string) => (
        <label key={cat} className="block text-sm">
          <input
            type="radio"
            checked={category === cat}
            onChange={() => setCategory(cat)}
          />
          <span className="ml-2">{cat}</span>
        </label>
      ))}

      <hr className="my-4" />

      {/* Experience */}
      <h3 className="font-semibold mb-2">Experience</h3>

      {[
        "All",
        "Fresher (0-1)",
        "Entry Level (1-3)",
        "Mid Level (3-5)",
        "Senior Level (5+)"
      ].map((level) => (
        <label key={level} className="block text-sm">
          <input
            type="radio"
            checked={jobLevel === level}
            onChange={() => setJobLevel(level)}
          />
          <span className="ml-2">{level}</span>
        </label>
      ))}

      <hr className="my-4" />

      {/* Skills */}
      <h3 className="font-semibold mb-2">Skills</h3>

      <input
        placeholder="Search skills"
        value={skillQuery}
        onChange={(e) => setSkillQuery(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <div className="max-h-40 overflow-y-auto">

        {skillsList
          .filter((s: string) =>
            s.toLowerCase().includes(skillQuery.toLowerCase())
          )
          .map((skill: string) => (

            <label key={skill} className="block text-sm">

              <input
                type="checkbox"
                checked={selectedSkills.includes(skill)}
                onChange={() => {
                  if (selectedSkills.includes(skill)) {
                    setSelectedSkills(
                      selectedSkills.filter((s: string) => s !== skill)
                    );
                  } else {
                    setSelectedSkills([...selectedSkills, skill]);
                  }
                }}
              />

              <span className="ml-2">{skill}</span>

            </label>

          ))}

      </div>

    </aside>
  );
}