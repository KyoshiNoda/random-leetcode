import { useState, Fragment } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { Dialog, DialogTitle, Listbox, Transition } from "@headlessui/react";
import Select from "react-select";
import { AddQuestion as AddQuestionType } from "../globals/types";
import { comfortLevels, difficultyLevels, topics } from "../globals/global";
import { addQuestion } from "../api/questions";

const AddQuestion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [comfortLevel, setComfortLevel] = useState(comfortLevels[0]);
  const [difficulty, setDifficulty] = useState(difficultyLevels[0]);
  const [selectedTopics, setSelectedTopics] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required";
    if (!link) newErrors.link = "Link is required";
    if (selectedTopics.length === 0)
      newErrors.topics = "At least one topic must be selected";
    if (!comfortLevel) newErrors.comfortLevel = "Comfort level is required";
    if (!difficulty) newErrors.difficulty = "Difficulty is required";
    return newErrors;
  };

  const formHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const question: AddQuestionType = {
      name: name,
      link: link,
      comfort_level: comfortLevel.toLowerCase(),
      difficulty: difficulty.toLowerCase(),
      topics: selectedTopics.map((topic) => topic.value),
    };

    try {
      const result = await addQuestion(question);
      setIsOpen(false);
      // Optionally reset the form here if needed
    } catch (error) {
      console.error(error);
      // Optionally set form submission error here
    }
  };

  const topicOptions = topics.map((topic) => ({ value: topic, label: topic }));

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded-lg">
            <DialogTitle className="text-2xl text-center font-medium">
              Add Leetcode Question
            </DialogTitle>
            <form className="mt-4 space-y-4" onSubmit={formHandler}>
              <div>
                <label className="block text-md font-medium">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.name ? "border-red-500" : "border-black"
                  } shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>
              <div>
                <label className="block text-md font-medium">Link:</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.link ? "border-red-500" : "border-black"
                  } shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
                />
                {errors.link && (
                  <span className="text-red-500 text-sm">{errors.link}</span>
                )}
              </div>
              <div className="flex gap-4 w-full">
                <div className="w-1/2">
                  <label className="block text-sm font-medium">
                    Difficulty:
                  </label>
                  <Listbox value={difficulty} onChange={setDifficulty}>
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={`relative w-full py-2 pl-3 pr-10 text-left bg-white border ${
                          errors.difficulty ? "border-red-500" : "border-black"
                        } rounded-lg shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      >
                        <span className="block truncate">{difficulty}</span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                          {difficultyLevels.map((level, idx) => (
                            <Listbox.Option
                              key={idx}
                              className={({ active }) =>
                                `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                  active
                                    ? "text-blue-900 bg-blue-100"
                                    : "text-gray-900"
                                }`
                              }
                              value={level}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {level}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  {errors.difficulty && (
                    <span className="text-red-500 text-sm">
                      {errors.difficulty}
                    </span>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium">
                    Comfort Level:
                  </label>
                  <Listbox value={comfortLevel} onChange={setComfortLevel}>
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={`relative w-full py-2 pl-3 pr-10 text-left bg-white border ${
                          errors.comfortLevel
                            ? "border-red-500"
                            : "border-black"
                        } rounded-lg shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      >
                        <span className="block truncate">{comfortLevel}</span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                          {comfortLevels.map((level, idx) => (
                            <Listbox.Option
                              key={idx}
                              className={({ active }) =>
                                `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                  active
                                    ? "text-blue-900 bg-blue-100"
                                    : "text-gray-900"
                                }`
                              }
                              value={level}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {level}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  {errors.comfortLevel && (
                    <span className="text-red-500 text-sm">
                      {errors.comfortLevel}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-md font-medium">Topics:</label>
                <Select
                  isMulti
                  name="topics"
                  options={topicOptions}
                  className="basic-multi-select mt-1"
                  classNamePrefix="select"
                  value={selectedTopics}
                  onChange={(selected) =>
                    setSelectedTopics(
                      selected as Array<{ value: string; label: string }>
                    )
                  }
                />
                {errors.topics && (
                  <span className="text-red-500 text-sm">{errors.topics}</span>
                )}
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div className="h-full flex items-end cursor-pointer">
        <FaRegPlusSquare size={48} onClick={() => setIsOpen(true)} />
      </div>
    </>
  );
};

export default AddQuestion;
