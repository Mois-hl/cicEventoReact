import React from "react";
import './Form.css';

export default function Form (){
  return(
    <div id="mauticform_wrapper_3ercoloquiodecomputocuanticocicipn" class="mauticform_wrapper">
    <form autocomplete="false" method="post" action="https://proyectosrym.cic.ipn.mx/mtcapp/form/submit?formId=1" id="mauticform_3ercoloquiodecomputocuanticocicipn" data-mautic-form="3ercoloquiodecomputocuanticocicipn" enctype="multipart/form-data">
        <div class="mauticform-error" id="mauticform_3ercoloquiodecomputocuanticocicipn_error"></div>
        <div class="mauticform-message" id="mauticform_3ercoloquiodecomputocuanticocicipn_message"></div>
        <div class="mauticform-innerform">
            
          <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_nombre" data-validate="nombre" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-1 mauticform-required">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_nombre" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_nombre" class="mauticform-label">Nombre</label>
                <input id="mauticform_input_3ercoloquiodecomputocuanticocicipn_nombre" name="mauticform[nombre]" value="" placeholder="Juan" class="mauticform-input" type="text" />
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_apellidos" data-validate="apellidos" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-2 mauticform-required">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_apellidos" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_apellidos" class="mauticform-label">Apellidos</label>
                <input id="mauticform_input_3ercoloquiodecomputocuanticocicipn_apellidos" name="mauticform[apellidos]" value="" placeholder="Perez" class="mauticform-input" type="text" />
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_te_identificas_con_el_pro" data-validate="te_identificas_con_el_pro" data-validation-type="select" class="mauticform-row mauticform-select mauticform-field-3 mauticform-required">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_te_identificas_con_el_pro" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_te_identificas_con_el_pro" class="mauticform-label">Te identificas con el pronombre</label>
                <select id="mauticform_input_3ercoloquiodecomputocuanticocicipn_te_identificas_con_el_pro" name="mauticform[te_identificas_con_el_pro]" value="" class="mauticform-selectbox">
                  <option value=""></option>
                  <option value="male">El</option>
                  <option value="female">Ella</option>
                  <option value="other">Otro</option>
                </select>
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_nivel_de_estudios" data-validate="nivel_de_estudios" data-validation-type="select" class="mauticform-row mauticform-select mauticform-field-4 mauticform-required">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_nivel_de_estudios" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_nivel_de_estudios" class="mauticform-label">Nivel de estudios</label>
                <select id="mauticform_input_3ercoloquiodecomputocuanticocicipn_nivel_de_estudios" name="mauticform[nivel_de_estudios]" value="" class="mauticform-selectbox">
                  <option value=""></option>
                  <option value="media">Media Superior</option>
                  <option value="superior">Superior</option>
                  <option value="maestria">Maestria</option>
                  <option value="doctorado">Doctorado</option>
                  <option value="postdoc">Postdoctorado</option>
                  <option value="trabajador">Trabajador industria</option>
                  <option value="otro">Otro</option>
                </select>
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_como_te_enteraste_de_este1" data-validate="como_te_enteraste_de_este1" data-validation-type="select" class="mauticform-row mauticform-select mauticform-field-5 mauticform-required">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_como_te_enteraste_de_este1" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_como_te_enteraste_de_este1" class="mauticform-label">Cómo te enteraste de este evento?</label>
                <select id="mauticform_input_3ercoloquiodecomputocuanticocicipn_como_te_enteraste_de_este1" name="mauticform[como_te_enteraste_de_este1]" value="" class="mauticform-selectbox">
                  <option value=""></option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="whatsapp">Whatsapp</option>
                  <option value="discord">Discord</option>
                  <option value="slack">Slack</option>
                  <option value="otro">Otro</option>
                </select>
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_correo_electronico" data-validate="correo_electronico" data-validation-type="email" class="mauticform-row mauticform-email mauticform-field-6 mauticform-required">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_correo_electronico" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_correo_electronico" class="mauticform-label">Correo electrónico</label>
                <input id="mauticform_input_3ercoloquiodecomputocuanticocicipn_correo_electronico" name="mauticform[correo_electronico]" value="" placeholder="ejemplo@mail.com" class="mauticform-input" type="email" />
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_le_parece_bien_que_utilic" data-validate="le_parece_bien_que_utilic" data-validation-type="radiogrp" class="mauticform-row mauticform-radiogrp mauticform-field-7 mauticform-required">
                <label class="mauticform-label" for="mauticform_radiogrp_radio_le_parece_bien_que_utilic_Si1">¿Le parece bien que utilicemos parte de sus respuestas, de forma anónima, para difundir la investigación sobre la educación cuántica con el fin de facilitar futuros eventos de este tipo?</label>
                <div class="mauticform-radiogrp-row">
                  <input name="mauticform[le_parece_bien_que_utilic]" class="mauticform-radiogrp-radio" id="mauticform_radiogrp_radio_le_parece_bien_que_utilic_yes0" type="radio" value="yes" />
                    <label id="mauticform_radiogrp_label_le_parece_bien_que_utilic_yes0" for="mauticform_radiogrp_radio_le_parece_bien_que_utilic_yes0" class="mauticform-radiogrp-label">Si</label>
                </div>
                <div class="mauticform-radiogrp-row">
                  <input name="mauticform[le_parece_bien_que_utilic]" class="mauticform-radiogrp-radio" id="mauticform_radiogrp_radio_le_parece_bien_que_utilic_no1" type="radio" value="no" />
                    <label id="mauticform_radiogrp_label_le_parece_bien_que_utilic_no1" for="mauticform_radiogrp_radio_le_parece_bien_que_utilic_no1" class="mauticform-radiogrp-label">No</label>
                </div>
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_pais" data-validate="pais" data-validation-type="country" class="mauticform-row mauticform-select mauticform-field-8 mauticform-required">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_pais" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_pais" class="mauticform-label">Pais</label>
                <select id="mauticform_input_3ercoloquiodecomputocuanticocicipn_pais" name="mauticform[pais]" value="" class="mauticform-selectbox">
                  <option value=""></option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Åland Islands">Åland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bonaire, Saint Eustatius and Saba">Bonaire, Saint Eustatius and Saba</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curaçao">Curaçao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea Bissau">Guinea Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                  <option value="Holy See">Holy See</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Italy">Italy</option>
                  <option value="Ivory Coast">Ivory Coast</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Kosovo">Kosovo</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="North Korea">North Korea</option>
                  <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic of the Congo">Republic of the Congo</option>
                  <option value="Réunion">Réunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Barthelemy">Saint Barthelemy</option>
                  <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Martin">Saint Martin</option>
                  <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                  <option value="South Korea">South Korea</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tahiti">Tahiti</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Unknown">Unknown</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                  <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Yugoslavia">Yugoslavia</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_carrera_o_area" data-validate="carrera_o_area" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-9 mauticform-required">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_carrera_o_area" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_carrera_o_area" class="mauticform-label">Carrera o Area</label>
                <input id="mauticform_input_3ercoloquiodecomputocuanticocicipn_carrera_o_area" name="mauticform[carrera_o_area]" value="" class="mauticform-input" type="text" />
                <span class="mauticform-errormsg" style={{display:'none'}}>This is required.</span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_comentarios_y_dudas__que" class="mauticform-row mauticform-text mauticform-field-10">
                <label id="mauticform_label_3ercoloquiodecomputocuanticocicipn_comentarios_y_dudas__que" for="mauticform_input_3ercoloquiodecomputocuanticocicipn_comentarios_y_dudas__que" class="mauticform-label">Comentarios y dudas  que tenga sobre el evento</label>
                <textarea id="mauticform_input_3ercoloquiodecomputocuanticocicipn_comentarios_y_dudas__que" name="mauticform[comentarios_y_dudas__que]" class="mauticform-textarea"></textarea>
                <span class="mauticform-errormsg" style={{display:'none'}}></span>
            </div>

            <div id="mauticform_3ercoloquiodecomputocuanticocicipn_submit" class="mauticform-row mauticform-button-wrapper mauticform-field-11">
                <button type="submit" name="mauticform[submit]" id="mauticform_input_3ercoloquiodecomputocuanticocicipn_submit" value="" class="mauticform-button btn btn-default">Enviar</button>
            </div>
            </div>
        </div>

        <input type="hidden" name="mauticform[formId]" id="mauticform_3ercoloquiodecomputocuanticocicipn_id" value="1" />
        <input type="hidden" name="mauticform[return]" id="mauticform_3ercoloquiodecomputocuanticocicipn_return" value="" />
        <input type="hidden" name="mauticform[formName]" id="mauticform_3ercoloquiodecomputocuanticocicipn_name" value="3ercoloquiodecomputocuanticocicipn" />

        </form>
</div>
  )
}