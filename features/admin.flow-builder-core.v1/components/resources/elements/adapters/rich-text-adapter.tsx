/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Typography from "@oxygen-ui/react/Typography";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { Encode } from "@wso2is/core/utils";
import parse, { domToReact } from "html-react-parser";
import React, { FunctionComponent, ReactElement } from "react";
import { Element } from "../../../../models/elements";
import { CommonElementFactoryPropsInterface } from "../common-element-factory";

/**
 * Props interface of {@link RichTextAdapter}
 */
export type RichTextAdapterPropsInterface = IdentifiableComponentInterface & CommonElementFactoryPropsInterface;

/**
 * Adapter for the Rich Text component.
 *
 * @param props - Props injected to the component.
 * @returns The RichTextAdapter component.
 */
const RichTextAdapter: FunctionComponent<RichTextAdapterPropsInterface> = ({
    resource
}: RichTextAdapterPropsInterface): ReactElement => (
    <>
        { parse(Encode.forHtml(resource?.config?.text), {
            replace(domNode: any) {
                if (((domNode as unknown) as any).name === "h1") {
                    <Typography variant="h1">{ domToReact(((domNode as unknown) as any).children) }</Typography>;
                }
            }
        }) }
    </>
);

export default RichTextAdapter;
