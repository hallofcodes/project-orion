/*
 *
 * Copyright (c) 2022 Melvin Jones Repol (mrepol742.github.io). All Rights Reserved.
 *
 * License under the Mrepol742 License, version 1.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://github.com/mrepol742/Mrepol742-the-License
 *
 * Unless required by the applicable law or agreed in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function array(groups) {
    try {

        let ids = [];
        for (a in groups.list) {
            id = groups.list[a].id;
            if (!ids.includes(id)) {
                ids.push(id);
            } else {
                delete groups.list[a];
            }
        }

        return groups;
    } catch (err) {
    }
    return null;
}

module.exports = array;