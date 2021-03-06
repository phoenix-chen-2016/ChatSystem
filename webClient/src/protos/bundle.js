/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.chat = (function() {
    
        /**
         * Namespace chat.
         * @exports chat
         * @namespace
         */
        var chat = {};
    
        chat.Packet = (function() {
    
            /**
             * Properties of a Packet.
             * @memberof chat
             * @interface IPacket
             * @property {string|null} [subject] Packet subject
             * @property {Uint8Array|null} [payload] Packet payload
             */
    
            /**
             * Constructs a new Packet.
             * @memberof chat
             * @classdesc Represents a Packet.
             * @implements IPacket
             * @constructor
             * @param {chat.IPacket=} [properties] Properties to set
             */
            function Packet(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Packet subject.
             * @member {string} subject
             * @memberof chat.Packet
             * @instance
             */
            Packet.prototype.subject = "";
    
            /**
             * Packet payload.
             * @member {Uint8Array} payload
             * @memberof chat.Packet
             * @instance
             */
            Packet.prototype.payload = $util.newBuffer([]);
    
            /**
             * Creates a new Packet instance using the specified properties.
             * @function create
             * @memberof chat.Packet
             * @static
             * @param {chat.IPacket=} [properties] Properties to set
             * @returns {chat.Packet} Packet instance
             */
            Packet.create = function create(properties) {
                return new Packet(properties);
            };
    
            /**
             * Encodes the specified Packet message. Does not implicitly {@link chat.Packet.verify|verify} messages.
             * @function encode
             * @memberof chat.Packet
             * @static
             * @param {chat.IPacket} message Packet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Packet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                return writer;
            };
    
            /**
             * Encodes the specified Packet message, length delimited. Does not implicitly {@link chat.Packet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Packet
             * @static
             * @param {chat.IPacket} message Packet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Packet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Packet message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Packet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Packet} Packet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Packet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Packet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.subject = reader.string();
                        break;
                    case 2:
                        message.payload = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Packet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Packet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Packet} Packet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Packet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Packet message.
             * @function verify
             * @memberof chat.Packet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Packet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.subject != null && message.hasOwnProperty("subject"))
                    if (!$util.isString(message.subject))
                        return "subject: string expected";
                if (message.payload != null && message.hasOwnProperty("payload"))
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                return null;
            };
    
            /**
             * Creates a Packet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Packet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Packet} Packet
             */
            Packet.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Packet)
                    return object;
                var message = new $root.chat.Packet();
                if (object.subject != null)
                    message.subject = String(object.subject);
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length)
                        message.payload = object.payload;
                return message;
            };
    
            /**
             * Creates a plain object from a Packet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Packet
             * @static
             * @param {chat.Packet} message Packet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Packet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.subject = "";
                    if (options.bytes === String)
                        object.payload = "";
                    else {
                        object.payload = [];
                        if (options.bytes !== Array)
                            object.payload = $util.newBuffer(object.payload);
                    }
                }
                if (message.subject != null && message.hasOwnProperty("subject"))
                    object.subject = message.subject;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                return object;
            };
    
            /**
             * Converts this Packet to JSON.
             * @function toJSON
             * @memberof chat.Packet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Packet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Packet;
        })();
    
        /**
         * LoginStatus enum.
         * @name chat.LoginStatus
         * @enum {number}
         * @property {number} LOGINSTATUS_REJECT=0 LOGINSTATUS_REJECT value
         * @property {number} LOGINSTATUS_ACCPET=1 LOGINSTATUS_ACCPET value
         */
        chat.LoginStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LOGINSTATUS_REJECT"] = 0;
            values[valuesById[1] = "LOGINSTATUS_ACCPET"] = 1;
            return values;
        })();
    
        chat.LoginReply = (function() {
    
            /**
             * Properties of a LoginReply.
             * @memberof chat
             * @interface ILoginReply
             * @property {chat.LoginStatus|null} [status] LoginReply status
             * @property {string|null} [name] LoginReply name
             */
    
            /**
             * Constructs a new LoginReply.
             * @memberof chat
             * @classdesc Represents a LoginReply.
             * @implements ILoginReply
             * @constructor
             * @param {chat.ILoginReply=} [properties] Properties to set
             */
            function LoginReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LoginReply status.
             * @member {chat.LoginStatus} status
             * @memberof chat.LoginReply
             * @instance
             */
            LoginReply.prototype.status = 0;
    
            /**
             * LoginReply name.
             * @member {string} name
             * @memberof chat.LoginReply
             * @instance
             */
            LoginReply.prototype.name = "";
    
            /**
             * Creates a new LoginReply instance using the specified properties.
             * @function create
             * @memberof chat.LoginReply
             * @static
             * @param {chat.ILoginReply=} [properties] Properties to set
             * @returns {chat.LoginReply} LoginReply instance
             */
            LoginReply.create = function create(properties) {
                return new LoginReply(properties);
            };
    
            /**
             * Encodes the specified LoginReply message. Does not implicitly {@link chat.LoginReply.verify|verify} messages.
             * @function encode
             * @memberof chat.LoginReply
             * @static
             * @param {chat.ILoginReply} message LoginReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                return writer;
            };
    
            /**
             * Encodes the specified LoginReply message, length delimited. Does not implicitly {@link chat.LoginReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.LoginReply
             * @static
             * @param {chat.ILoginReply} message LoginReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LoginReply message from the specified reader or buffer.
             * @function decode
             * @memberof chat.LoginReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.LoginReply} LoginReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.LoginReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LoginReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.LoginReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.LoginReply} LoginReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LoginReply message.
             * @function verify
             * @memberof chat.LoginReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };
    
            /**
             * Creates a LoginReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.LoginReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.LoginReply} LoginReply
             */
            LoginReply.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.LoginReply)
                    return object;
                var message = new $root.chat.LoginReply();
                switch (object.status) {
                case "LOGINSTATUS_REJECT":
                case 0:
                    message.status = 0;
                    break;
                case "LOGINSTATUS_ACCPET":
                case 1:
                    message.status = 1;
                    break;
                }
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };
    
            /**
             * Creates a plain object from a LoginReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.LoginReply
             * @static
             * @param {chat.LoginReply} message LoginReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "LOGINSTATUS_REJECT" : 0;
                    object.name = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.chat.LoginStatus[message.status] : message.status;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };
    
            /**
             * Converts this LoginReply to JSON.
             * @function toJSON
             * @memberof chat.LoginReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LoginReply;
        })();
    
        /**
         * Scope enum.
         * @name chat.Scope
         * @enum {number}
         * @property {number} SCOPE_NONE=0 SCOPE_NONE value
         * @property {number} SCOPE_PERSON=1 SCOPE_PERSON value
         * @property {number} SCOPE_ROOM=2 SCOPE_ROOM value
         * @property {number} SCOPE_SYSTEM=3 SCOPE_SYSTEM value
         */
        chat.Scope = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SCOPE_NONE"] = 0;
            values[valuesById[1] = "SCOPE_PERSON"] = 1;
            values[valuesById[2] = "SCOPE_ROOM"] = 2;
            values[valuesById[3] = "SCOPE_SYSTEM"] = 3;
            return values;
        })();
    
        chat.ChatMessage = (function() {
    
            /**
             * Properties of a ChatMessage.
             * @memberof chat
             * @interface IChatMessage
             * @property {chat.Scope|null} [scope] ChatMessage scope
             * @property {string|null} [message] ChatMessage message
             * @property {string|null} [target] ChatMessage target
             * @property {string|null} [from] ChatMessage from
             */
    
            /**
             * Constructs a new ChatMessage.
             * @memberof chat
             * @classdesc Represents a ChatMessage.
             * @implements IChatMessage
             * @constructor
             * @param {chat.IChatMessage=} [properties] Properties to set
             */
            function ChatMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatMessage scope.
             * @member {chat.Scope} scope
             * @memberof chat.ChatMessage
             * @instance
             */
            ChatMessage.prototype.scope = 0;
    
            /**
             * ChatMessage message.
             * @member {string} message
             * @memberof chat.ChatMessage
             * @instance
             */
            ChatMessage.prototype.message = "";
    
            /**
             * ChatMessage target.
             * @member {string} target
             * @memberof chat.ChatMessage
             * @instance
             */
            ChatMessage.prototype.target = "";
    
            /**
             * ChatMessage from.
             * @member {string} from
             * @memberof chat.ChatMessage
             * @instance
             */
            ChatMessage.prototype.from = "";
    
            /**
             * Creates a new ChatMessage instance using the specified properties.
             * @function create
             * @memberof chat.ChatMessage
             * @static
             * @param {chat.IChatMessage=} [properties] Properties to set
             * @returns {chat.ChatMessage} ChatMessage instance
             */
            ChatMessage.create = function create(properties) {
                return new ChatMessage(properties);
            };
    
            /**
             * Encodes the specified ChatMessage message. Does not implicitly {@link chat.ChatMessage.verify|verify} messages.
             * @function encode
             * @memberof chat.ChatMessage
             * @static
             * @param {chat.IChatMessage} message ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.scope);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.target);
                if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.from);
                return writer;
            };
    
            /**
             * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link chat.ChatMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.ChatMessage
             * @static
             * @param {chat.IChatMessage} message ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatMessage message from the specified reader or buffer.
             * @function decode
             * @memberof chat.ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.ChatMessage} ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ChatMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.scope = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    case 3:
                        message.target = reader.string();
                        break;
                    case 4:
                        message.from = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.ChatMessage} ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatMessage message.
             * @function verify
             * @memberof chat.ChatMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.scope != null && message.hasOwnProperty("scope"))
                    switch (message.scope) {
                    default:
                        return "scope: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.target != null && message.hasOwnProperty("target"))
                    if (!$util.isString(message.target))
                        return "target: string expected";
                if (message.from != null && message.hasOwnProperty("from"))
                    if (!$util.isString(message.from))
                        return "from: string expected";
                return null;
            };
    
            /**
             * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.ChatMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.ChatMessage} ChatMessage
             */
            ChatMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.ChatMessage)
                    return object;
                var message = new $root.chat.ChatMessage();
                switch (object.scope) {
                case "SCOPE_NONE":
                case 0:
                    message.scope = 0;
                    break;
                case "SCOPE_PERSON":
                case 1:
                    message.scope = 1;
                    break;
                case "SCOPE_ROOM":
                case 2:
                    message.scope = 2;
                    break;
                case "SCOPE_SYSTEM":
                case 3:
                    message.scope = 3;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                if (object.target != null)
                    message.target = String(object.target);
                if (object.from != null)
                    message.from = String(object.from);
                return message;
            };
    
            /**
             * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.ChatMessage
             * @static
             * @param {chat.ChatMessage} message ChatMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.scope = options.enums === String ? "SCOPE_NONE" : 0;
                    object.message = "";
                    object.target = "";
                    object.from = "";
                }
                if (message.scope != null && message.hasOwnProperty("scope"))
                    object.scope = options.enums === String ? $root.chat.Scope[message.scope] : message.scope;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.target != null && message.hasOwnProperty("target"))
                    object.target = message.target;
                if (message.from != null && message.hasOwnProperty("from"))
                    object.from = message.from;
                return object;
            };
    
            /**
             * Converts this ChatMessage to JSON.
             * @function toJSON
             * @memberof chat.ChatMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatMessage;
        })();
    
        chat.PlayerList = (function() {
    
            /**
             * Properties of a PlayerList.
             * @memberof chat
             * @interface IPlayerList
             * @property {string|null} [room] PlayerList room
             * @property {Array.<string>|null} [players] PlayerList players
             */
    
            /**
             * Constructs a new PlayerList.
             * @memberof chat
             * @classdesc Represents a PlayerList.
             * @implements IPlayerList
             * @constructor
             * @param {chat.IPlayerList=} [properties] Properties to set
             */
            function PlayerList(properties) {
                this.players = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerList room.
             * @member {string} room
             * @memberof chat.PlayerList
             * @instance
             */
            PlayerList.prototype.room = "";
    
            /**
             * PlayerList players.
             * @member {Array.<string>} players
             * @memberof chat.PlayerList
             * @instance
             */
            PlayerList.prototype.players = $util.emptyArray;
    
            /**
             * Creates a new PlayerList instance using the specified properties.
             * @function create
             * @memberof chat.PlayerList
             * @static
             * @param {chat.IPlayerList=} [properties] Properties to set
             * @returns {chat.PlayerList} PlayerList instance
             */
            PlayerList.create = function create(properties) {
                return new PlayerList(properties);
            };
    
            /**
             * Encodes the specified PlayerList message. Does not implicitly {@link chat.PlayerList.verify|verify} messages.
             * @function encode
             * @memberof chat.PlayerList
             * @static
             * @param {chat.IPlayerList} message PlayerList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.room);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.players[i]);
                return writer;
            };
    
            /**
             * Encodes the specified PlayerList message, length delimited. Does not implicitly {@link chat.PlayerList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.PlayerList
             * @static
             * @param {chat.IPlayerList} message PlayerList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PlayerList message from the specified reader or buffer.
             * @function decode
             * @memberof chat.PlayerList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.PlayerList} PlayerList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PlayerList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.room = reader.string();
                        break;
                    case 2:
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PlayerList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.PlayerList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.PlayerList} PlayerList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PlayerList message.
             * @function verify
             * @memberof chat.PlayerList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.room != null && message.hasOwnProperty("room"))
                    if (!$util.isString(message.room))
                        return "room: string expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i)
                        if (!$util.isString(message.players[i]))
                            return "players: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a PlayerList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.PlayerList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.PlayerList} PlayerList
             */
            PlayerList.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.PlayerList)
                    return object;
                var message = new $root.chat.PlayerList();
                if (object.room != null)
                    message.room = String(object.room);
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".chat.PlayerList.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i)
                        message.players[i] = String(object.players[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PlayerList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.PlayerList
             * @static
             * @param {chat.PlayerList} message PlayerList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.players = [];
                if (options.defaults)
                    object.room = "";
                if (message.room != null && message.hasOwnProperty("room"))
                    object.room = message.room;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = message.players[j];
                }
                return object;
            };
    
            /**
             * Converts this PlayerList to JSON.
             * @function toJSON
             * @memberof chat.PlayerList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PlayerList;
        })();
    
        chat.Room = (function() {
    
            /**
             * Properties of a Room.
             * @memberof chat
             * @interface IRoom
             * @property {string|null} [name] Room name
             * @property {boolean|null} [hasPassword] Room hasPassword
             */
    
            /**
             * Constructs a new Room.
             * @memberof chat
             * @classdesc Represents a Room.
             * @implements IRoom
             * @constructor
             * @param {chat.IRoom=} [properties] Properties to set
             */
            function Room(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Room name.
             * @member {string} name
             * @memberof chat.Room
             * @instance
             */
            Room.prototype.name = "";
    
            /**
             * Room hasPassword.
             * @member {boolean} hasPassword
             * @memberof chat.Room
             * @instance
             */
            Room.prototype.hasPassword = false;
    
            /**
             * Creates a new Room instance using the specified properties.
             * @function create
             * @memberof chat.Room
             * @static
             * @param {chat.IRoom=} [properties] Properties to set
             * @returns {chat.Room} Room instance
             */
            Room.create = function create(properties) {
                return new Room(properties);
            };
    
            /**
             * Encodes the specified Room message. Does not implicitly {@link chat.Room.verify|verify} messages.
             * @function encode
             * @memberof chat.Room
             * @static
             * @param {chat.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.hasPassword != null && Object.hasOwnProperty.call(message, "hasPassword"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasPassword);
                return writer;
            };
    
            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link chat.Room.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Room
             * @static
             * @param {chat.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Room message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Room();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.hasPassword = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Room message.
             * @function verify
             * @memberof chat.Room
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Room.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.hasPassword != null && message.hasOwnProperty("hasPassword"))
                    if (typeof message.hasPassword !== "boolean")
                        return "hasPassword: boolean expected";
                return null;
            };
    
            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Room
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Room} Room
             */
            Room.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Room)
                    return object;
                var message = new $root.chat.Room();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.hasPassword != null)
                    message.hasPassword = Boolean(object.hasPassword);
                return message;
            };
    
            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Room
             * @static
             * @param {chat.Room} message Room
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Room.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.hasPassword = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.hasPassword != null && message.hasOwnProperty("hasPassword"))
                    object.hasPassword = message.hasPassword;
                return object;
            };
    
            /**
             * Converts this Room to JSON.
             * @function toJSON
             * @memberof chat.Room
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Room.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Room;
        })();
    
        chat.RoomList = (function() {
    
            /**
             * Properties of a RoomList.
             * @memberof chat
             * @interface IRoomList
             * @property {Array.<chat.IRoom>|null} [rooms] RoomList rooms
             */
    
            /**
             * Constructs a new RoomList.
             * @memberof chat
             * @classdesc Represents a RoomList.
             * @implements IRoomList
             * @constructor
             * @param {chat.IRoomList=} [properties] Properties to set
             */
            function RoomList(properties) {
                this.rooms = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RoomList rooms.
             * @member {Array.<chat.IRoom>} rooms
             * @memberof chat.RoomList
             * @instance
             */
            RoomList.prototype.rooms = $util.emptyArray;
    
            /**
             * Creates a new RoomList instance using the specified properties.
             * @function create
             * @memberof chat.RoomList
             * @static
             * @param {chat.IRoomList=} [properties] Properties to set
             * @returns {chat.RoomList} RoomList instance
             */
            RoomList.create = function create(properties) {
                return new RoomList(properties);
            };
    
            /**
             * Encodes the specified RoomList message. Does not implicitly {@link chat.RoomList.verify|verify} messages.
             * @function encode
             * @memberof chat.RoomList
             * @static
             * @param {chat.IRoomList} message RoomList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rooms != null && message.rooms.length)
                    for (var i = 0; i < message.rooms.length; ++i)
                        $root.chat.Room.encode(message.rooms[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified RoomList message, length delimited. Does not implicitly {@link chat.RoomList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.RoomList
             * @static
             * @param {chat.IRoomList} message RoomList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RoomList message from the specified reader or buffer.
             * @function decode
             * @memberof chat.RoomList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.RoomList} RoomList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.RoomList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.rooms && message.rooms.length))
                            message.rooms = [];
                        message.rooms.push($root.chat.Room.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RoomList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.RoomList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.RoomList} RoomList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RoomList message.
             * @function verify
             * @memberof chat.RoomList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rooms != null && message.hasOwnProperty("rooms")) {
                    if (!Array.isArray(message.rooms))
                        return "rooms: array expected";
                    for (var i = 0; i < message.rooms.length; ++i) {
                        var error = $root.chat.Room.verify(message.rooms[i]);
                        if (error)
                            return "rooms." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a RoomList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.RoomList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.RoomList} RoomList
             */
            RoomList.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.RoomList)
                    return object;
                var message = new $root.chat.RoomList();
                if (object.rooms) {
                    if (!Array.isArray(object.rooms))
                        throw TypeError(".chat.RoomList.rooms: array expected");
                    message.rooms = [];
                    for (var i = 0; i < object.rooms.length; ++i) {
                        if (typeof object.rooms[i] !== "object")
                            throw TypeError(".chat.RoomList.rooms: object expected");
                        message.rooms[i] = $root.chat.Room.fromObject(object.rooms[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a RoomList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.RoomList
             * @static
             * @param {chat.RoomList} message RoomList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoomList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rooms = [];
                if (message.rooms && message.rooms.length) {
                    object.rooms = [];
                    for (var j = 0; j < message.rooms.length; ++j)
                        object.rooms[j] = $root.chat.Room.toObject(message.rooms[j], options);
                }
                return object;
            };
    
            /**
             * Converts this RoomList to JSON.
             * @function toJSON
             * @memberof chat.RoomList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RoomList;
        })();
    
        chat.JoinRoom = (function() {
    
            /**
             * Properties of a JoinRoom.
             * @memberof chat
             * @interface IJoinRoom
             * @property {string|null} [room] JoinRoom room
             * @property {string|null} [password] JoinRoom password
             */
    
            /**
             * Constructs a new JoinRoom.
             * @memberof chat
             * @classdesc Represents a JoinRoom.
             * @implements IJoinRoom
             * @constructor
             * @param {chat.IJoinRoom=} [properties] Properties to set
             */
            function JoinRoom(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * JoinRoom room.
             * @member {string} room
             * @memberof chat.JoinRoom
             * @instance
             */
            JoinRoom.prototype.room = "";
    
            /**
             * JoinRoom password.
             * @member {string} password
             * @memberof chat.JoinRoom
             * @instance
             */
            JoinRoom.prototype.password = "";
    
            /**
             * Creates a new JoinRoom instance using the specified properties.
             * @function create
             * @memberof chat.JoinRoom
             * @static
             * @param {chat.IJoinRoom=} [properties] Properties to set
             * @returns {chat.JoinRoom} JoinRoom instance
             */
            JoinRoom.create = function create(properties) {
                return new JoinRoom(properties);
            };
    
            /**
             * Encodes the specified JoinRoom message. Does not implicitly {@link chat.JoinRoom.verify|verify} messages.
             * @function encode
             * @memberof chat.JoinRoom
             * @static
             * @param {chat.IJoinRoom} message JoinRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.room);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };
    
            /**
             * Encodes the specified JoinRoom message, length delimited. Does not implicitly {@link chat.JoinRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.JoinRoom
             * @static
             * @param {chat.IJoinRoom} message JoinRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a JoinRoom message from the specified reader or buffer.
             * @function decode
             * @memberof chat.JoinRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.JoinRoom} JoinRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.JoinRoom();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.room = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a JoinRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.JoinRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.JoinRoom} JoinRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a JoinRoom message.
             * @function verify
             * @memberof chat.JoinRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.room != null && message.hasOwnProperty("room"))
                    if (!$util.isString(message.room))
                        return "room: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };
    
            /**
             * Creates a JoinRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.JoinRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.JoinRoom} JoinRoom
             */
            JoinRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.JoinRoom)
                    return object;
                var message = new $root.chat.JoinRoom();
                if (object.room != null)
                    message.room = String(object.room);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };
    
            /**
             * Creates a plain object from a JoinRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.JoinRoom
             * @static
             * @param {chat.JoinRoom} message JoinRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.room = "";
                    object.password = "";
                }
                if (message.room != null && message.hasOwnProperty("room"))
                    object.room = message.room;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };
    
            /**
             * Converts this JoinRoom to JSON.
             * @function toJSON
             * @memberof chat.JoinRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return JoinRoom;
        })();
    
        /**
         * JoinRoomStatus enum.
         * @name chat.JoinRoomStatus
         * @enum {number}
         * @property {number} JOINROOMSTATUS_REJECT=0 JOINROOMSTATUS_REJECT value
         * @property {number} JOINROOMSTATUS_ACCPET=1 JOINROOMSTATUS_ACCPET value
         */
        chat.JoinRoomStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "JOINROOMSTATUS_REJECT"] = 0;
            values[valuesById[1] = "JOINROOMSTATUS_ACCPET"] = 1;
            return values;
        })();
    
        chat.JoinRoomReply = (function() {
    
            /**
             * Properties of a JoinRoomReply.
             * @memberof chat
             * @interface IJoinRoomReply
             * @property {chat.JoinRoomStatus|null} [status] JoinRoomReply status
             * @property {string|null} [reason] JoinRoomReply reason
             */
    
            /**
             * Constructs a new JoinRoomReply.
             * @memberof chat
             * @classdesc Represents a JoinRoomReply.
             * @implements IJoinRoomReply
             * @constructor
             * @param {chat.IJoinRoomReply=} [properties] Properties to set
             */
            function JoinRoomReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * JoinRoomReply status.
             * @member {chat.JoinRoomStatus} status
             * @memberof chat.JoinRoomReply
             * @instance
             */
            JoinRoomReply.prototype.status = 0;
    
            /**
             * JoinRoomReply reason.
             * @member {string} reason
             * @memberof chat.JoinRoomReply
             * @instance
             */
            JoinRoomReply.prototype.reason = "";
    
            /**
             * Creates a new JoinRoomReply instance using the specified properties.
             * @function create
             * @memberof chat.JoinRoomReply
             * @static
             * @param {chat.IJoinRoomReply=} [properties] Properties to set
             * @returns {chat.JoinRoomReply} JoinRoomReply instance
             */
            JoinRoomReply.create = function create(properties) {
                return new JoinRoomReply(properties);
            };
    
            /**
             * Encodes the specified JoinRoomReply message. Does not implicitly {@link chat.JoinRoomReply.verify|verify} messages.
             * @function encode
             * @memberof chat.JoinRoomReply
             * @static
             * @param {chat.IJoinRoomReply} message JoinRoomReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                return writer;
            };
    
            /**
             * Encodes the specified JoinRoomReply message, length delimited. Does not implicitly {@link chat.JoinRoomReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.JoinRoomReply
             * @static
             * @param {chat.IJoinRoomReply} message JoinRoomReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinRoomReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a JoinRoomReply message from the specified reader or buffer.
             * @function decode
             * @memberof chat.JoinRoomReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.JoinRoomReply} JoinRoomReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.JoinRoomReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.reason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a JoinRoomReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.JoinRoomReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.JoinRoomReply} JoinRoomReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinRoomReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a JoinRoomReply message.
             * @function verify
             * @memberof chat.JoinRoomReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinRoomReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                return null;
            };
    
            /**
             * Creates a JoinRoomReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.JoinRoomReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.JoinRoomReply} JoinRoomReply
             */
            JoinRoomReply.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.JoinRoomReply)
                    return object;
                var message = new $root.chat.JoinRoomReply();
                switch (object.status) {
                case "JOINROOMSTATUS_REJECT":
                case 0:
                    message.status = 0;
                    break;
                case "JOINROOMSTATUS_ACCPET":
                case 1:
                    message.status = 1;
                    break;
                }
                if (object.reason != null)
                    message.reason = String(object.reason);
                return message;
            };
    
            /**
             * Creates a plain object from a JoinRoomReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.JoinRoomReply
             * @static
             * @param {chat.JoinRoomReply} message JoinRoomReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinRoomReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "JOINROOMSTATUS_REJECT" : 0;
                    object.reason = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.chat.JoinRoomStatus[message.status] : message.status;
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                return object;
            };
    
            /**
             * Converts this JoinRoomReply to JSON.
             * @function toJSON
             * @memberof chat.JoinRoomReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinRoomReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return JoinRoomReply;
        })();
    
        return chat;
    })();

    return $root;
});
