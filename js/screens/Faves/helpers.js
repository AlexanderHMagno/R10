/* This function will create a group of sessions based on the time of each session.
 *    if two or more sessions start at the same hour both of them will be grouped together.
 * @param {array}  holding the information per each session (objects)
 * return {array}  an organized array per start hour of each session */
export const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({ title: curr.startTime, data: [curr] });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};
