"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_range_1 = require("react-range");
exports.AdminInputRange = ({ step, min, max, values, onChange }) => {
    // const [state, setState] = React.useState({values: [50]})
    return (<div style={{
        display: 'flex',
        flexWrap: 'wrap'
    }}>
        <react_range_1.Range values={values} step={step} min={min} max={max} onChange={values => onChange(values)} renderTrack={({ props, children }) => (<div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{
        ...props.style,
        height: '10px',
        display: 'flex',
        width: '50%'
    }}>
              <div ref={props.ref} style={{
        height: '3px',
        width: '100%',
        borderRadius: '4px',
        background: react_range_1.getTrackBackground({
            values: values,
            colors: ['#368D8D', '#1E2A31'],
            min: min,
            max: max
        }),
        alignSelf: 'center'
    }}>
                {children}
              </div>
            </div>)} renderThumb={({ props, isDragged }) => (<div {...props} style={{
        ...props.style,
        height: '20px',
        width: '20px',
        borderRadius: '99px',
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 6px #AAA',
        outline: 'none'
    }}>
              <div style={{
        height: '16px',
        width: '5px',
        backgroundColor: isDragged ? '#548BF4' : '#CCC'
    }}/>
            </div>)}/>
        <output style={{ marginTop: '15px' }} id="output" className="text-admin-input">
          {values[0].toFixed(0)}
        </output>
      </div>);
};