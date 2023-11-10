const unlockBox = (index, unlockedCondition, prevBoxDatas) => {
  const updatedBoxDatas = [...prevBoxDatas]
  updatedBoxDatas[index] = {
    ...updatedBoxDatas[index],
    unlocked: unlockedCondition,
  }
  return updatedBoxDatas
}

const checkBox = (index, checkBoxDoneCondition, prevBoxDatas) => {
  const updatedBoxDatas = [...prevBoxDatas]
  updatedBoxDatas[index] = {
    ...updatedBoxDatas[index],
    checkBoxDone: checkBoxDoneCondition,
  }
  return updatedBoxDatas
}

export { unlockBox, checkBox }
