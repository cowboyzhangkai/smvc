package cn.com.cowboy.project.enums;

import org.apache.commons.lang3.StringUtils;

/**
 * <p>
 * 性别
 * </p>
 *
 * @author Kenny
 */
public enum Gender {
    MALE("男"), FEMALE("女"), UNKNOWN("未知");
    private final String cnName;

    private Gender(String cnName) {
        this.cnName = cnName;
    }

    /**
     * <p>字符串转枚举辅助方法。</p>
     *
     * @param s String
     * @return Gender
     */
    public static Gender getInstance(String s) {
        s = StringUtils.trimToNull(s);
        for (Gender gender : values()) {
            if (StringUtils.equalsIgnoreCase(s, gender.name()) || StringUtils.equals(s, gender.cnName)) {
                return gender;
            }
        }
        return UNKNOWN;
    }
}