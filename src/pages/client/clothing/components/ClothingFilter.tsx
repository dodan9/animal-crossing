import { ColorEnum } from "@src/assets/enum";
import { LangEnum } from "@src/lang/enum";
import { t } from "i18next";
import { ClothingStyle, ClothingCategory, ClothingLabelTheme } from "../types";
import {
  useClothingFilter,
  useClothingFilterAction,
} from "../store/clothingFilter";
import { ChangeEvent } from "react";
import { ColorChip, ColorChipListBox } from "@src/components/colorChip/styled";

const ClothingFilter = () => {
  const { category, style, labeltheme, color } = useClothingFilter();
  const { clearFilter, setCategory, setColor, setStyle, setLabelTheme } =
    useClothingFilterAction();

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as ClothingCategory);
  };

  const handleChangeLabelTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    setLabelTheme(event.target.value as ClothingLabelTheme);
  };

  const handleColorChange = (color: ColorEnum) => {
    setColor(color);
  };

  const handleStyleChange = (style: ClothingStyle) => {
    setStyle(style);
  };

  return (
    <>
      <div>
        <button onClick={() => clearFilter()}>필터 초기화</button>
      </div>

      <div>
        <div>카테고리</div>
        <select
          value={category ?? ""}
          name='category'
          onChange={handleChangeCategory}
        >
          <option value='' label='-' />
          {Object.values(ClothingCategory).map((category) => {
            return (
              <option key={category} value={category}>
                {t(`${LangEnum.clothing}.category.${category}`)}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <div>테마</div>
        <select
          value={labeltheme ?? ""}
          name='labeltheme'
          onChange={handleChangeLabelTheme}
        >
          <option value='' label='-' />
          {Object.values(ClothingLabelTheme).map((labeltheme) => {
            return (
              <option key={labeltheme} value={labeltheme}>
                {t(`${LangEnum.clothing}.label_theme.${labeltheme}`)}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <div>스타일</div>
        {Object.values(ClothingStyle).map((styleValue) => {
          const isSelected = style?.includes(styleValue);
          return (
            <div key={styleValue}>
              <input
                type='checkbox'
                checked={isSelected}
                onChange={() => handleStyleChange(styleValue)}
              />
              {t(`${LangEnum.clothing}.style.${styleValue}`)}
            </div>
          );
        })}
      </div>

      <div>
        <div>색상</div>
        <ColorChipListBox>
          {Object.values(ColorEnum).map((colorValue) => {
            const isSelected = color?.includes(colorValue);
            return (
              <ColorChip
                key={colorValue}
                color={colorValue}
                isSelected={isSelected}
              >
                <input
                  type='checkbox'
                  checked={isSelected}
                  onChange={() => handleColorChange(colorValue)}
                />
              </ColorChip>
            );
          })}
        </ColorChipListBox>
      </div>
    </>
  );
};

export default ClothingFilter;
